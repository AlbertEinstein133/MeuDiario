/**
 * Saiba mais sobre modos claro e escuro:
 * https://docs.expo.dev/guides/color-schemes/
 */

// Importa cores do tema
import { Colors } from '@/constants/theme';
// Importa hook para obter esquema de cores
import { useColorScheme } from '@/hooks/use-color-scheme';

// Hook useThemeColor - Retorna cor baseada no tema
export function useThemeColor(
  props: { light?: string; dark?: string }, // Props com cores para temas claro e escuro
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark // Nome da cor padrão
) {
  // Obtém o tema do sistema (claro ou escuro)
  const theme = useColorScheme() ?? 'light';
  // Obtém a cor das props baseada no tema
  const colorFromProps = props[theme];

  // Retorna a cor das props se existir, caso contrário retorna da constante Colors
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
