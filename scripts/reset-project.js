#!/usr/bin/env node

/**
 * Este script é usado para resetar o projeto para um estado em branco.
 * Ele deleta ou move os diretórios /app, /components, /hooks, /scripts e /constants para /app-example
 * baseado na entrada do usuário e cria um novo diretório /app com arquivos index.tsx e _layout.tsx.
 * Você pode remover o script `reset-project` do package.json e deletar este arquivo com segurança após executá-lo.
 */

// Importa módulo de sistema de arquivos
const fs = require("fs");
// Importa módulo de caminho
const path = require("path");
// Importa módulo de linha de comando
const readline = require("readline");

// Diretório raiz do projeto
const root = process.cwd();
// Diretórios antigos que serão movidos ou deletados
const oldDirs = ["app", "components", "hooks", "constants", "scripts"];
// Nome do diretório de exemplo
const exampleDir = "app-example";
// Nome do novo diretório de app
const newAppDir = "app";
// Caminho completo do diretório de exemplo
const exampleDirPath = path.join(root, exampleDir);

// Conteúdo do arquivo index.tsx
const indexContent = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
`;

// Conteúdo do arquivo _layout.tsx
const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
`;

// Cria interface de linha de comando
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função assíncrona para mover ou deletar diretórios
const moveDirectories = async (userInput) => {
  try {
    // Se o usuário respondeu 'y', cria o diretório app-example
    if (userInput === "y") {
      // Cria o diretório app-example
      await fs.promises.mkdir(exampleDirPath, { recursive: true });
      console.log(`📁 Diretório /${exampleDir} criado.`);
    }

    // Move diretórios antigos para app-example ou deleta eles
    for (const dir of oldDirs) {
      // Caminho completo do diretório antigo
      const oldDirPath = path.join(root, dir);
      // Verifica se o diretório existe
      if (fs.existsSync(oldDirPath)) {
        if (userInput === "y") {
          // Caminho novo dentro de app-example
          const newDirPath = path.join(root, exampleDir, dir);
          // Move o diretório
          await fs.promises.rename(oldDirPath, newDirPath);
          console.log(`➡️ /${dir} movido para /${exampleDir}/${dir}.`);
        } else {
          // Deleta o diretório recursivamente
          await fs.promises.rm(oldDirPath, { recursive: true, force: true });
          console.log(`❌ /${dir} deletado.`);
        }
      } else {
        console.log(`➡️ /${dir} não existe, pulando.`);
      }
    }

    // Cria novo diretório /app
    const newAppDirPath = path.join(root, newAppDir);
    await fs.promises.mkdir(newAppDirPath, { recursive: true });
    console.log("\n📁 Novo diretório /app criado.");

    // Cria arquivo index.tsx
    const indexPath = path.join(newAppDirPath, "index.tsx");
    await fs.promises.writeFile(indexPath, indexContent);
    console.log("📄 app/index.tsx criado.");

    // Cria arquivo _layout.tsx
    const layoutPath = path.join(newAppDirPath, "_layout.tsx");
    await fs.promises.writeFile(layoutPath, layoutContent);
    console.log("📄 app/_layout.tsx criado.");

    console.log("\n✅ Reset do projeto concluído. Próximos passos:");
    console.log(
      `1. Execute \`npx expo start\` para iniciar um servidor de desenvolvimento.\n2. Edite app/index.tsx para editar a tela principal.${
        userInput === "y"
          ? `\n3. Delete o diretório /${exampleDir} quando terminar de consultá-lo.`
          : ""
      }`
    );
  } catch (error) {
    console.error(`❌ Erro durante a execução do script: ${error.message}`);
  }
};

// Pergunta ao usuário se deseja mover arquivos existentes
rl.question(
  "Você deseja mover arquivos existentes para /app-example ao invés de deletá-los? (S/n): ",
  (answer) => {
    // Converte resposta para minúsculas, padrão é 'y' (sim)
    const userInput = answer.trim().toLowerCase() || "y";
    // Verifica se a resposta é válida
    if (userInput === "y" || userInput === "n") {
      // Executa a função de mover diretórios
      moveDirectories(userInput).finally(() => rl.close());
    } else {
      console.log("❌ Entrada inválida. Por favor, digite 'S' ou 'N'.");
      rl.close();
    }
  }
);
