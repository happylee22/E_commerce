import { Text, View } from 'react-native';
import Wrapper from '@/components/Ui/Wrapper';
import Title from '@/components/Ui/Title';
import LoginForm from '@/components/Form/LoginForm';

export default function login() {
  return (
    <Wrapper>
      <Title title="welcome" />
      <LoginForm />
    </Wrapper>
  );
}
