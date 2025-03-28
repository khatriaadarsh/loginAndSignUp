import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputTextView}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChange={setName}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChange={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={password}
          onChange={setPassword}
          secureTextEntry
        />
        <Pressable style={styles.signinBtn}>
          <Text style={styles.signinBtnText}>Sign Up</Text>
        </Pressable>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>OR</Text>
        <View style={styles.IconsView}>
          <Icon name="google" size={40} color="black" />
          <Icon name="facebook" size={40} color="blue" />
          <Icon
            name="linkedin"
            size={40}
            color="white"
            style={{backgroundColor: 'blue', padding: 6, borderRadius: 5}}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15%',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputTextView: {
    gap: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '75%',
    padding: 10,
    borderRadius: 10,
  },
  signinBtn: {
    backgroundColor: 'black',
    width: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signinBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  IconsView: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 5,
    alignItems: 'center',
  },
});
