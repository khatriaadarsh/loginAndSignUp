import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SignUp from './SignUp';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputTextView}>
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
        <Pressable style={styles.forgetLink}>
          <Text style={styles.forgetLinkText}>Forget Password?</Text>
        </Pressable>
        <View style={styles.btnsView}>
          <Pressable style={styles.signinBtn}>
            <Text style={styles.signinBtnText}>Sign In</Text>
          </Pressable>
          <Pressable style={styles.signUpLink}>
            <Text style={styles.signUpLinkText}>Need an account? SignUp</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputTextView: {
    gap: 30,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.5,
    width: '80%',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  forgetLink: {
    paddingLeft: '54%',
  },
  forgetLinkText: {
    textDecorationLine: 'underline',
  },
  btnsView: {
    gap: 10,
    width: '100%',
    alignItems: 'center',
  },
  signinBtn: {
    backgroundColor: 'black',
    padding: 13,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  signinBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  signUpLinkText: {
    fontSize: 18,
  },
});
