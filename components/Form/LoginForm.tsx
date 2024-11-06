import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { CustomInput } from './CustomInput';
import { CustomButton } from '../Ui/CustomButton';

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    console.log(email, password);
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
        secureTextEntry
      />
      <CustomInput
        label="password"
        placeholder="Enter your password"
        keyboardType="default"
        Value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
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
