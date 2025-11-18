/**
 * Cores utilizadas no aplicativo. As cores são definidas para modo claro e escuro.
 * Existem muitas outras formas de estilizar seu aplicativo. Por exemplo, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// Importa Platform do react-native para detectar a plataforma
import { Platform } from 'react-native';

// Define cor de destaque para tema claro
const tintColorLight = '#0a7ea4';
// Define cor de destaque para tema escuro
const tintColorDark = '#fff';

// Exporta objeto com cores para temas claro e escuro
export const Colors = {
  // Cores para tema claro
  light: {
    text: '#11181C', // Cor do texto
    background: '#fff', // Cor de fundo
    tint: tintColorLight, // Cor de destaque
    icon: '#687076', // Cor do ícone
    tabIconDefault: '#687076', // Cor padrão do ícone da aba
    tabIconSelected: tintColorLight, // Cor do ícone da aba selecionada
  },
  // Cores para tema escuro
  dark: {
    text: '#ECEDEE', // Cor do texto
    background: '#151718', // Cor de fundo
    tint: tintColorDark, // Cor de destaque
    icon: '#9BA1A6', // Cor do ícone
    tabIconDefault: '#9BA1A6', // Cor padrão do ícone da aba
    tabIconSelected: tintColorDark, // Cor do ícone da aba selecionada
  },
};

// Exporta objeto com fontes para diferentes plataformas
export const Fonts = Platform.select({
  // Fontes para iOS
  ios: {
    // Fonte sem serifa padrão do iOS
    sans: 'system-ui',
    // Fonte com serifa do iOS
    serif: 'ui-serif',
    // Fonte arredondada do iOS
    rounded: 'ui-rounded',
    // Fonte monoespaçada do iOS
    mono: 'ui-monospace',
  },
  // Fontes padrão para outras plataformas
  default: {
    sans: 'normal', // Sem serifa
    serif: 'serif', // Com serifa
    rounded: 'normal', // Arredondada
    mono: 'monospace', // Monoespaçada
  },
  // Fontes para web
  web: {
    // Fonte sem serifa para web
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    // Fonte com serifa para web
    serif: "Georgia, 'Times New Roman', serif",
    // Fonte arredondada para web
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    // Fonte monoespaçada para web
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
