// Importa tipos do React
import type { PropsWithChildren, ReactElement } from 'react';
// Importa StyleSheet do react-native
import { StyleSheet } from 'react-native';
// Importa componentes e funções de animação do react-native-reanimated
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from 'react-native-reanimated';

// Importa componente de view com tema
import { ThemedView } from '@/components/themed-view';
// Importa hook para obter esquema de cores
import { useColorScheme } from '@/hooks/use-color-scheme';
// Importa hook para obter cor do tema
import { useThemeColor } from '@/hooks/use-theme-color';

// Constante que define a altura do header
const HEADER_HEIGHT = 250;

// Define tipo de props para o componente ParallaxScrollView
type Props = PropsWithChildren<{
  headerImage: ReactElement; // Imagem do header
  headerBackgroundColor: { dark: string; light: string }; // Cores de fundo para temas claro e escuro
}>;

// Componente ParallaxScrollView - ScrollView com efeito paralaxe
export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  // Hook que obtém a cor de fundo baseada no tema
  const backgroundColor = useThemeColor({}, 'background');
  // Hook que obtém o esquema de cores do sistema
  const colorScheme = useColorScheme() ?? 'light';
  // Referência para o ScrollView animado
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  // Hook que obtém o offset de scroll
  const scrollOffset = useScrollOffset(scrollRef);
  
  // Hook que cria o estilo animado do header com efeito paralaxe
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // Interpolação vertical do header baseada no scroll
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT], // Valores de entrada (scroll offset)
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75] // Valores de saída (translação)
          ),
        },
        {
          // Interpolação de escala do header baseada no scroll
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  // Retorna o ScrollView animado com efeito paralaxe
  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor, flex: 1 }}
      scrollEventThrottle={16} // Controla a frequência de eventos de scroll
    >
      {/* Header animado com imagem */}
      <Animated.View
        style={[
          styles.header,
          { backgroundColor: headerBackgroundColor[colorScheme] }, // Cor de fundo do header baseada no tema
          headerAnimatedStyle, // Aplicar estilos animados
        ]}
      >
        {/* Imagem do header */}
        {headerImage}
      </Animated.View>
      {/* Conteúdo principal com tema */}
      <ThemedView style={styles.content}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1, // Ocupa todo espaço disponível
  },
  // Estilo do header
  header: {
    height: HEADER_HEIGHT, // Altura do header
    overflow: 'hidden', // Oculta conteúdo que transborda
  },
  // Estilo do conteúdo
  content: {
    flex: 1, // Ocupa todo espaço disponível
    padding: 32, // Espaçamento interno
    gap: 16, // Espaço entre itens
    overflow: 'hidden', // Oculta conteúdo que transborda
  },
});
