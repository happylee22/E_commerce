import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { CustomInput } from './CustomInput';
import { CustomButton } from '../Ui/CustomButton';
import { validatePassword, validateEmail } from '../../utils';

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setErrorEmail('please enter a valid email adddress');
      return;
    }
    if (!validatePassword(password)) {
      setErrorPassword(
        'password must include at least one uppercase letter, one lowercase and one number'
      );
      return;
    }
  };
  console.log([email, password]);
  const disabled = email.trim() === '' || password.trim() === '';

  return (
    <View style={styles.container}>
      <CustomInput
        label="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
        Value={email}
        onChangeText={handleEmailChange}
        secureTextEntry={secure}
        error={errorEmail}
      />
      <CustomInput
        label="password"
        placeholder="Enter your password"
        keyboardType="default"
        Value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={secure}
        error={errorPassword}
        toggleSecure={toggleSecure}
      />
      <CustomButton
        buttonTitle="Sign in"
        onPress={handleSubmit}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
});
export default LoginForm;
