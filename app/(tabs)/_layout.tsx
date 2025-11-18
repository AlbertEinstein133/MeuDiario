// Importa Tabs para criar navegação por abas do Expo Router
import { Tabs } from 'expo-router';
// Importa React para usar componentes
import React from 'react';

// Importa componente de aba com feedback tátil
import { HapticTab } from '@/components/haptic-tab';
// Importa componente de ícone
import { IconSymbol } from '@/components/ui/icon-symbol';
// Importa cores do tema
import { Colors } from '@/constants/theme';
// Importa hook para obter esquema de cores
import { useColorScheme } from '@/hooks/use-color-scheme';

// Componente TabLayout - Layout de abas principal
export default function TabLayout() {
  // Obtém o esquema de cores do sistema (claro ou escuro)
  const colorScheme = useColorScheme();

  // Retorna a estrutura de abas
  return (
    // Componente Tabs que gerencia as abas
    <Tabs
      screenOptions={{
        // Define a cor do ícone da aba ativa baseada no tema
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Oculta o header das telas
        headerShown: false,
        // Usa o componente HapticTab que fornece feedback tátil
        tabBarButton: HapticTab,
      }}>
      {/* Aba Index - Tela Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // Ícone de casa para a aba Home
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      {/* Aba Explore - Tela de Exploração */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          // Ícone de avião de papel para a aba Explore
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
