import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome, Let's Get Started</Text>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./image.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({pressed}) => [
            styles.button,
            styles.signInButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.button,
            styles.signUpButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.button,
            styles.gameButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate('TicTacToe')}>
          <Text style={styles.buttonText}>Tic Tac Toe Game</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Light gray background
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },

  // Header section
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Image section
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Takes available space
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125, // Circular image if square
    borderWidth: 2,
    borderColor: '#ddd',
  },

  // Buttons section
  buttonContainer: {
    marginBottom: 40,
    gap: 15,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{scale: 0.98}],
    cursor: 'pointer',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },

  // Individual button styles
  signInButton: {
    backgroundColor: '#3498db', // Blue
  },
  signUpButton: {
    backgroundColor: '#2ecc71', // Green
  },
  gameButton: {
    backgroundColor: '#e74c3c', // Red
  },
});
