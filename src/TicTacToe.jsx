import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Temp = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  //  Handle player moves
  const handlePress = index => {
    if (board[index] !== calculateWinner(board)) return;

    // Create a copy of the board (Immutable principle
    const newBoard = [...board];

    // Mark the square with X or O based on the current turn
    newBoard[index] = isXNext ? 'X' : 'O';

    // Update state with new board state and toggle the turn
    setBoard(newBoard);
    setIsXNext(!isXNext);

    // Check for winner
    const winner = calculateWinner(newBoard);
    if (winner) {
      Alert.alert(`Player ${winner} wins!`);
    } else if (!newBoard.includes(null)) {
      Alert.alert('It is a draw!');
    }
  };

  // Calculate the winner
  const calculateWinner = square => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        square[a] &&
        square[a] === square[b] &&
        square[a] &&
        square[a] === square[c]
      ) {
        return square[a];
      }
    }
    return null;
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.title}>
        {isXNext ? `Player X's turns` : `Player O's turns`}
      </Text>
      <View style={styles.board}>
        {board.map((cell, index) => (
          <Pressable
            key={index}
            onPress={() => handlePress(index)}
            style={styles.cell}>
            <Text style={styles.cellText}>{cell}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable onPress={resetGame} style={styles.resetButton}>
        <Text style={styles.resetText}>Reset Game</Text>
      </Pressable>
    </View>
  );
};

export default Temp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  board: {
    width: 300, // Fixed board size
    height: 300,
    flexDirection: 'row', // Arrange cells in rows
    flexWrap: 'wrap', // Allow wrapping to next row
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 40,
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  resetText: {
    color: '#fff',
    fontSize: 18,
  },
});
