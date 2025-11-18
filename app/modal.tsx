// Importa Link para navegação
import { Link } from 'expo-router';
// Importa StyleSheet do react-native
import { StyleSheet } from 'react-native';

// Importa componente de texto com tema
import { ThemedText } from '@/components/themed-text';
// Importa componente de view com tema
import { ThemedView } from '@/components/themed-view';

// Componente ModalScreen - Tela modal
export default function ModalScreen() {
  // Retorna a tela modal
  return (
    // Container da modal com temas
    <ThemedView style={styles.container}>
      {/* Título da modal */}
      <ThemedText type="title">This is a modal</ThemedText>
      {/* Link que volta para a tela home e fecha a modal */}
      <Link href="/" dismissTo style={styles.link}>
        {/* Texto do link */}
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

// Estilos para a modal
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1, // Ocupa todo espaço disponível
    alignItems: 'center', // Centraliza itens horizontalmente
    justifyContent: 'center', // Centraliza itens verticalmente
    padding: 20, // Espaçamento interno
  },
  // Estilo do link
  link: {
    marginTop: 15, // Margem superior
    paddingVertical: 15, // Espaçamento vertical
  },
});
