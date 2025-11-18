// Importa tipos de props de abas da navegação
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
// Importa componente pressável multi-plataforma
import { PlatformPressable } from '@react-navigation/elements';
// Importa módulo de feedback tátil do Expo
import * as Haptics from 'expo-haptics';

// Componente HapticTab - Aba com feedback tátil
export function HapticTab(props: BottomTabBarButtonProps) {
  // Retorna um componente pressável com feedback tátil
  return (
    <PlatformPressable
      {...props}
      // Função chamada quando o usuário pressiona a aba
      onPressIn={(ev) => {
        // Verifica se a plataforma é iOS
        if (process.env.EXPO_OS === 'ios') {
          // Adiciona feedback tátil suave quando pressiona a aba no iOS
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        // Chama a função original de pressionar se existir
        props.onPressIn?.(ev);
      }}
    />
  );
}
