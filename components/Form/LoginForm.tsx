import { Href, Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CustomInput } from './CustomInput';
import { CustomButton } from '../Ui/CustomButton';
import { validateEmail, validatePassword } from '@/utils';
import { toast } from 'sonner-native';

type Props = {
  register?: boolean;
};
export const LoginForm = ({ register }: Props) => {
  const [values, setValues] = useState({
    userName: '',
    password: '',
    name: '',
  });

  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);
  const router = useRouter();
  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };
  const { userName, password, name } = values;
  const handleSubmit = async () => {
    if (register && name.trim() === '') {
      setErrorName('please enter your name');
      return;
    }
    try {
      const res = await fetch('http://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: 'emilys',
          password: 'emilypass',
        }),
        credentials: 'include',
      });
      const response = await res.json();
      console.log(response);
      if (register && name.trim() === '') {
        setErrorName('Please enter your name');
        return;
      }

      if (!validatePassword(password)) {
        setErrorPassword(
          'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
        );

        return;
      }

      router.replace('/');

      console.log({
        userName,
        password,
        name,
      });
      setValues({
        userName: '',
        name: '',
        password: '',
      });
      setErrorEmail('');
      setErrorPassword('');
      setErrorEmail('');
      toast.success('success', {
        description: 'welcome back',
      });
    } catch (error) {
      console.log(error);
      toast.error('something went wrong', {
        description: 'please try again later!!',
      });
    }
  };

  const disabled = userName.trim() === '' || password.trim() === '';
  const buttonTitle = register ? 'Sign up' : 'Sign in';
  const bottomText = register ? 'Already' : 'Don’t';
  const actionText = register ? 'Sign in' : 'Sign up';
  const href: Href<string | object> = register ? '/login' : '/register';
  return (
    <View style={styles.container}>
      {register && (
        <CustomInput
          label="Full name"
          placeholder="eg John Doe"
          keyboardType="default"
          value={name}
          onChangeText={(text) => handleChange('name', text)}
          error={errorName}
        />
      )}
      <CustomInput
        label="UserName"
        placeholder="Enter your userName"
        keyboardType="email-address"
        value={userName}
        onChangeText={(text) => handleChange('userName', text)}
        error={errorEmail}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        value={password}
        onChangeText={(text) => handleChange('password', text)}
        error={errorPassword}
        secureTextEntry={secure}
        toggleSecure={toggleSecure}
        password
      />
      <CustomButton
        disabled={disabled}
        buttonTitle={buttonTitle}
        onPress={handleSubmit}
      />

      <Link href={href} asChild>
        <Text style={styles.account}>
          {bottomText} have an account?{' '}
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
