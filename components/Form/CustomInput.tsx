import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { colors } from '@/Constant';

type Props = {
  placeholder: string;
  Value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label: String;
  secureTextEntry: boolean;
};

export const CustomInput = ({
  placeholder,
  Value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntry,
}: Props): JSX.Element => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={Value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    padding: 10,
    height: 55,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});
