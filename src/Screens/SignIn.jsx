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

const SignIn = ({navigation}) => {
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
          <Pressable
            style={styles.signinBtn}
            onPress={() => navigation.navigate('APIIntegration')}>
            <Text style={styles.signinBtnText}>Sign In</Text>
          </Pressable>
          <Pressable
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLinkText}>Need an account? SignUp</Text>
          </Pressable>
        </View>
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
    color: 'white',
  },
  inputTextView: {
    gap: 30,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: '80%',
    borderRadius: 10,
    padding: 10,
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
  IconsView: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 5,
    alignItems: 'center',
  },
});
