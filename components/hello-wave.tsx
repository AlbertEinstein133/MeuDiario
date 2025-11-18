// Importa Animated da biblioteca react-native-reanimated para criar animações
import Animated from 'react-native-reanimated';

// Componente HelloWave - Exibe uma onda animada
export function HelloWave() {
  // Retorna um texto animado com efeito de onda
  return (
    // Texto animado da biblioteca reanimated
    <Animated.Text
      style={{
        fontSize: 28, // Tamanho da fonte
        lineHeight: 32, // Altura da linha
        marginTop: -6, // Margem superior negativa
        // Defini a animação de onda
        animationName: {
          '50%': { transform: [{ rotate: '25deg' }] }, // Rotação de 25 graus no meio da animação
        },
        animationIterationCount: 4, // Repetir a animação 4 vezes
        animationDuration: '300ms', // Duração de 300 milissegundos
      }}>
      {/* Emoji de onda */}
      👋
    </Animated.Text>
  );
}
