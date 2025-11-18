// Importa View e ViewProps do react-native
import { View, type ViewProps } from 'react-native';

// Importa hook customizado para obter cor do tema
import { useThemeColor } from '@/hooks/use-theme-color';

// Define tipo de props para o componente ThemedView
export type ThemedViewProps = ViewProps & {
  lightColor?: string; // Cor opcional para tema claro
  darkColor?: string; // Cor opcional para tema escuro
};

// Componente ThemedView - View com suporte a temas
export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  // Hook que obtém a cor de fundo baseada no tema (claro ou escuro)
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  // Retorna o componente View com cor de fundo do tema
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
