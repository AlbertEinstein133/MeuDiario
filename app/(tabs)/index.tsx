// Importa Image do expo-image para exibir imagens
import { Image } from 'expo-image';
// Importa Platform e StyleSheet do react-native
import { Platform, StyleSheet } from 'react-native';

// Importa componente de animação de onda
import { HelloWave } from '@/components/hello-wave';
// Importa componente de scroll view com efeito paralaxe
import ParallaxScrollView from '@/components/parallax-scroll-view';
// Importa componente de texto com tema
import { ThemedText } from '@/components/themed-text';
// Importa componente de view com tema
import { ThemedView } from '@/components/themed-view';
// Importa Link para navegação
import { Link } from 'expo-router';

// Componente HomeScreen - Tela inicial do aplicativo
export default function HomeScreen() {
  // Retorna a tela com scroll view paralaxe
  return (
    // ScrollView com efeito de paralaxe no header
    <ParallaxScrollView
      // Define cores de fundo do header para temas claro e escuro
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      // Define a imagem do header (logo do React)
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Container do título com onda */}
      <ThemedView style={styles.titleContainer}>
        {/* Texto de boas-vindas */}
        <ThemedText type="title">Welcome!</ThemedText>
        {/* Componente de onda animado */}
        <HelloWave />
      </ThemedView>

      {/* Container do Passo 1 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {/* Exibe diferentes atalhos baseado na plataforma */}
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      {/* Container do Passo 2 com Link */}
      <ThemedView style={styles.stepContainer}>
        {/* Link que abre um modal */}
        <Link href="/modal">
          {/* Gatilho para ativar o link */}
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          {/* Preview do link */}
          <Link.Preview />
          {/* Menu de opções do link */}
          <Link.Menu>
            {/* Ação: Action */}
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            {/* Ação: Share */}
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            {/* Submenu com mais opções */}
            <Link.Menu title="More" icon="ellipsis">
              {/* Ação: Delete (destrutiva) */}
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        {/* Texto instruindo o usuário a explorar a aba Explore */}
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>

      {/* Container do Passo 3 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  // Container do título
  titleContainer: {
    flexDirection: 'row', // Alinha itens em linha
    alignItems: 'center', // Centraliza itens verticalmente
    gap: 8, // Espaço entre itens
  },
  // Container de cada passo
  stepContainer: {
    gap: 8, // Espaço entre elementos
    marginBottom: 8, // Margem inferior
  },
  // Estilo do logo React
  reactLogo: {
    height: 178, // Altura
    width: 290, // Largura
    bottom: 0, // Posição no fundo
    left: 0, // Posição à esquerda
    position: 'absolute', // Posição absoluta
  },
});
