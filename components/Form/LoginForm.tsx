import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { CustomInput } from './CustomInput';
import { CustomButton } from '../Ui/CustomButton';
import { validatePassword, validateEmail } from '../../utils';
import { Href, Link } from 'expo-router';

type props = {
  register?: boolean;
};

const LoginForm = ({ register }: props) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);
  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };

  const { email, password, name } = values;
  const handleSubmit = () => {
    if (register && name.trim() === '') {
      setErrorName('please enter your name');
      return;
    }

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

    setValues({
      email: '',
      name: '',
      password: '',
    });
    setErrorEmail('');
    setErrorPassword('');
    setErrorName('');
  };

  const disabled = email.trim() === '' || password.trim() === '';
  const buttonText = register ? 'sign up' : 'sign in';
  const accountText = register
    ? 'Already have an account'
    : "Don't have an account";
  const actionText = register ? 'sign In' : 'sign Up';
  const href: Href<string | object> = register ? '/login' : '/register';

  return (
    <View style={styles.container}>
      {register && (
        <CustomInput
          label="full name"
          placeholder="e.g Omueti Happiness"
          keyboardType="default"
          Value={name}
          onChangeText={(text) => handleChange('name', text)}
          error={errorName}
        />
      )}
      <CustomInput
        label="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
        Value={email}
        onChangeText={(text) => handleChange('email', text)}
        error={errorEmail}
      />
      <CustomInput
        label="password"
        placeholder="Enter your password"
        keyboardType="default"
        Value={password}
        onChangeText={(text) => handleChange('password', text)}
        secureTextEntry={secure}
        error={errorPassword}
        toggleSecure={toggleSecure}
        password
      />
      <CustomButton
        buttonTitle={buttonText}
        onPress={handleSubmit}
        disabled={disabled}
      />

      <Link href={href} asChild>
        <Text style={styles.account}>
          {accountText}
          <Text style={styles.register}>{actionText}</Text>
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
  register: {
    color: 'blue',
  },
  account: {
    marginTop: 20,
    textAlign: 'center',
  },
});
export default LoginForm;
