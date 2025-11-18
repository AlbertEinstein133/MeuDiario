// Importa Image do expo-image
import { Image } from 'expo-image';
// Importa Platform e StyleSheet do react-native
import { Platform, StyleSheet } from 'react-native';

// Importa componente colapsável
import { Collapsible } from '@/components/ui/collapsible';
// Importa componente de link externo
import { ExternalLink } from '@/components/external-link';
// Importa scroll view com paralaxe
import ParallaxScrollView from '@/components/parallax-scroll-view';
// Importa texto com tema
import { ThemedText } from '@/components/themed-text';
// Importa view com tema
import { ThemedView } from '@/components/themed-view';
// Importa componente de ícone
import { IconSymbol } from '@/components/ui/icon-symbol';
// Importa configurações de fonte
import { Fonts } from '@/constants/theme';

// Componente ExploreScreen - Tela de exploração
export default function TabTwoScreen() {
  // Retorna a tela de exploração
  return (
    // ScrollView com paralaxe
    <ParallaxScrollView
      // Define cores de fundo para temas claro e escuro
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      // Define o ícone do header
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      {/* Container do título */}
      <ThemedView style={styles.titleContainer}>
        {/* Título "Explore" com fonte arredondada */}
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Explore
        </ThemedText>
      </ThemedView>

      {/* Texto introdutório */}
      <ThemedText>This app includes example code to help you get started.</ThemedText>

      {/* Seção colapsável sobre roteamento baseado em arquivos */}
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        {/* Link externo para documentação */}
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Seção colapsável sobre suporte multi-plataforma */}
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>

      {/* Seção colapsável sobre imagens */}
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        {/* Imagem do logo React */}
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        {/* Link externo para documentação de imagens */}
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Seção colapsável sobre modo claro e escuro */}
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        {/* Link externo para documentação de temas */}
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Seção colapsável sobre animações */}
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {/* Conteúdo específico para iOS */}
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  // Estilo do ícone do header
  headerImage: {
    color: '#808080', // Cor do ícone
    bottom: -90, // Posição inferior
    left: -35, // Posição à esquerda
    position: 'absolute', // Posição absoluta
  },
  // Container do título
  titleContainer: {
    flexDirection: 'row', // Alinha itens em linha
    gap: 8, // Espaço entre itens
  },
});
