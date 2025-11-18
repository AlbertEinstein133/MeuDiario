// Importa componentes de tema da biblioteca de navegação React Navigation
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// Importa Stack para criar navegação em pilha do Expo Router
import { Stack } from 'expo-router';
// Importa StatusBar para controlar a barra de status
import { StatusBar } from 'expo-status-bar';
// Importa react-native-reanimated para animações
import 'react-native-reanimated';

// Importa hook customizado para obter o esquema de cores
import { useColorScheme } from '@/hooks/use-color-scheme';

// Configuração de ancoragem para o layout raiz
export const unstable_settings = {
  anchor: '(tabs)',
};

// Componente RootLayout - Layout raiz da aplicação
export default function RootLayout() {
  // Hook para obter o esquema de cores do sistema (claro ou escuro)
  const colorScheme = useColorScheme();

  // Retorna a estrutura do layout com theme provider
  return (
    // Provedor de tema que define o tema baseado no esquema de cores
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Stack Navigator para gerenciar as telas */}
      <Stack>
        {/* Tela (tabs) com header oculto */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Tela modal que aparece como um modal */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      {/* Status bar com estilo automático */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
