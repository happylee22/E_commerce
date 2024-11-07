import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { colors } from '@/Constant';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type Props = {
  placeholder: string;
  Value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label: String;
  secureTextEntry: boolean;
  error: string;

  toggleSecure?: () => void;
  password?: boolean;
};

export const CustomInput = ({
  placeholder,
  Value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntry,
  error,
  password,
  toggleSecure,
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
        <TouchableOpacity onPress={toggleSecure}>
          {secureTextEntry ? (
            <AntDesign name={secureTextEntry ? 'eyeo' : 'eye'} />
          ) : (
            <FontAwesome name="eye-slash" size={30} />
          )}
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    flex: 1,
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
