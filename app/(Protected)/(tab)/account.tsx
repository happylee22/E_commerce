import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

const account = () => {
  return (
    <View>
      <Button title="logout" onPress={() => router.push} />
    </View>
  );
};

export default account;
