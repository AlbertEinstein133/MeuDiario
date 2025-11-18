// Importa StyleSheet, Text e TextProps do react-native
import { StyleSheet, Text, type TextProps } from 'react-native';

// Importa hook customizado para obter cor do tema
import { useThemeColor } from '@/hooks/use-theme-color';

// Define tipo de props para o componente ThemedText
export type ThemedTextProps = TextProps & {
  lightColor?: string; // Cor opcional para tema claro
  darkColor?: string; // Cor opcional para tema escuro
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'; // Tipo de texto
};

// Componente ThemedText - Texto com suporte a temas
export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // Hook que obtém a cor baseada no tema (claro ou escuro)
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Retorna o componente Text com estilos e cor do tema
  return (
    <Text
      style={[
        { color }, // Cor do tema aplicada
        type === 'default' ? styles.default : undefined, // Estilo padrão
        type === 'title' ? styles.title : undefined, // Estilo de título
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined, // Estilo padrão semi-negrito
        type === 'subtitle' ? styles.subtitle : undefined, // Estilo de subtítulo
        type === 'link' ? styles.link : undefined, // Estilo de link
        style, // Estilos customizados passados como prop
      ]}
      {...rest}
    />
  );
}

// Estilos para diferentes tipos de texto
const styles = StyleSheet.create({
  // Estilo padrão
  default: {
    fontSize: 16, // Tamanho da fonte
    lineHeight: 24, // Altura da linha
  },
  // Estilo padrão semi-negrito
  defaultSemiBold: {
    fontSize: 16, // Tamanho da fonte
    lineHeight: 24, // Altura da linha
    fontWeight: '600', // Peso da fonte semi-negrito
  },
  // Estilo de título
  title: {
    fontSize: 32, // Tamanho da fonte grande
    fontWeight: 'bold', // Peso da fonte negrito
    lineHeight: 32, // Altura da linha
  },
  // Estilo de subtítulo
  subtitle: {
    fontSize: 20, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte negrito
  },
  // Estilo de link
  link: {
    lineHeight: 30, // Altura da linha
    fontSize: 16, // Tamanho da fonte
    color: '#0a7ea4', // Cor do link
  },
});
