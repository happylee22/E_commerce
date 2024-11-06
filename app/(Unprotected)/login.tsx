import { Text, View } from 'react-native';
import Wrapper from '@/components/Ui/Wrapper';

import LoginForm from '@/components/Form/LoginForm';
import { Title } from '@/components/Ui/Title';

export default function login() {
  return (
    <Wrapper>
      <Title title="welcome" />
      <LoginForm />
    </Wrapper>
  );
}
