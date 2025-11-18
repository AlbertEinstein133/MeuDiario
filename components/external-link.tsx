// Importa Href e Link do expo-router
import { Href, Link } from 'expo-router';
// Importa funções para abrir navegador e tipos de apresentação
import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
// Importa ComponentProps do React
import { type ComponentProps } from 'react';

// Define tipo de props para o componente ExternalLink
type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string };

// Componente ExternalLink - Link externo que abre em navegador
export function ExternalLink({ href, ...rest }: Props) {
  // Retorna um componente Link com comportamento customizado
  return (
    <Link
      target="_blank" // Abre em nova aba
      {...rest}
      href={href}
      // Função chamada quando o usuário pressiona o link
      onPress={async (event) => {
        // Verifica se não está na plataforma web
        if (process.env.EXPO_OS !== 'web') {
          // Previne o comportamento padrão de linking
          event.preventDefault();
          // Abre o link em um navegador in-app
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
        }
      }}
    />
  );
}
