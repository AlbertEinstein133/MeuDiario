// Importa tipos e hooks do React
import { PropsWithChildren, useState } from 'react';
// Importa StyleSheet e TouchableOpacity do react-native
import { StyleSheet, TouchableOpacity } from 'react-native';

// Importa componente de texto com tema
import { ThemedText } from '@/components/themed-text';
// Importa componente de view com tema
import { ThemedView } from '@/components/themed-view';
// Importa componente de ícone
import { IconSymbol } from '@/components/ui/icon-symbol';
// Importa cores do tema
import { Colors } from '@/constants/theme';
// Importa hook para obter esquema de cores
import { useColorScheme } from '@/hooks/use-color-scheme';

// Componente Collapsible - Componente que expande e contrai conteúdo
export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  // Estado para controlar se o componente está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  // Hook que obtém o esquema de cores do sistema
  const theme = useColorScheme() ?? 'light';

  // Retorna o componente colapsável
  return (
    <ThemedView>
      {/* Botão do header que expande/contrai o conteúdo */}
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)} // Alterna entre aberto e fechado
        activeOpacity={0.8} // Opacidade quando pressionado
      >
        {/* Ícone de chevron que roda quando abre/fecha */}
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} // Cor baseada no tema
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }} // Rotação do ícone
        />

        {/* Título do componente colapsável */}
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      
      {/* Conteúdo que aparece quando o componente está aberto */}
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  // Estilo do header
  heading: {
    flexDirection: 'row', // Alinha itens em linha
    alignItems: 'center', // Centraliza itens verticalmente
    gap: 6, // Espaço entre itens
  },
  // Estilo do conteúdo
  content: {
    marginTop: 6, // Margem superior
    marginLeft: 24, // Margem esquerda
  },
});
