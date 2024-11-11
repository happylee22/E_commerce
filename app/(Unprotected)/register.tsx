import LoginForm from '@/components/Form/LoginForm';
import { Title } from '@/components/Ui/Title';
import Wrapper from '@/components/Ui/Wrapper';
import { Text, View } from 'react-native';

export default function register() {
  return (
    <Wrapper>
      <Title title="Welcome" />
      <LoginForm register />
    </Wrapper>
  );
}
