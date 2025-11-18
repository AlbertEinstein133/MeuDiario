// Fallback para usar MaterialIcons no Android e web.

// Importa MaterialIcons do expo vector icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// Importa tipos do expo-symbols
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
// Importa ComponentProps do React
import { ComponentProps } from 'react';
// Importa tipos de estilos do react-native
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

// Define tipo de mapeamento de ícones
type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
// Define tipo de nome de ícone
type IconSymbolName = keyof typeof MAPPING;

/**
 * Adicione seus mapeamentos de SF Symbols para Material Icons aqui.
 * - Veja Material Icons no [Diretório de Ícones](https://icons.expo.fyi).
 * - Veja SF Symbols no [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home', // Ícone de casa
  'paperplane.fill': 'send', // Ícone de avião
  'chevron.left.forwardslash.chevron.right': 'code', // Ícone de código
  'chevron.right': 'chevron-right', // Ícone de seta direita
} as IconMapping;

/**
 * Componente de ícone que usa SF Symbols nativo no iOS e Material Icons no Android e web.
 * Isso garante uma aparência consistente entre plataformas e uso ideal de recursos.
 * Os nomes dos ícones são baseados em SF Symbols e requerem mapeamento manual para Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName; // Nome do ícone
  size?: number; // Tamanho do ícone
  color: string | OpaqueColorValue; // Cor do ícone
  style?: StyleProp<TextStyle>; // Estilos adicionais
  weight?: SymbolWeight; // Peso do ícone
}) {
  // Retorna o ícone Material mapeado
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
