// Importa hooks do React
import { useEffect, useState } from 'react';
// Importa hook de esquema de cores do react-native
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Para suportar renderização estática, este valor precisa ser recalculado
 * no lado do cliente para web
 */
export function useColorScheme() {
  // Estado para rastrear se o componente foi hidratado no cliente
  const [hasHydrated, setHasHydrated] = useState(false);

  // Efeito que marca como hidratado quando o componente monta
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // Obtém o esquema de cores do react-native
  const colorScheme = useRNColorScheme();

  // Retorna o esquema de cores se hidratado, caso contrário retorna 'light' (padrão para SSR)
  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
