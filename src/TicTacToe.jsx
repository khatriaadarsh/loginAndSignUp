import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handlePress = index => {
    // Prevent overwriting cells and ignore clicks if game is won
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      Alert.alert('Game Over', `Player ${winner} wins!`);
    } else if (!newBoard.includes(null)) {
      Alert.alert('Game Over', "It's a draw!");
    }
  };

  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: Player ${winner}`
    : !board.includes(null)
    ? 'Game Draw!'
    : `Next Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tic Tac Toe</Text>
      <Text style={styles.status}>{status}</Text>

      <View style={styles.board}>
        {board.map((cell, index) => (
          <Pressable
            key={index}
            style={[
              styles.cell,
              cell === 'X' ? styles.xCell : cell === 'O' ? styles.oCell : null,
            ]}
            onPress={() => handlePress(index)}
            disabled={!!cell || !!winner}>
            <Text style={styles.cellText}>{cell}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={({pressed}) => [
          styles.resetButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  status: {
    fontSize: 20,
    color: '#555',
    marginBottom: 30,
    fontWeight: '600',
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cell: {
    width: '33.333%',
    height: '33.333%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xCell: {
    backgroundColor: '#f0f7ff',
  },
  oCell: {
    backgroundColor: '#fff0f0',
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  resetButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#4285f4',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{scale: 0.98}],
  },
  resetText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default TicTacToeGame;
