import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '@/Constant';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type Props = {
  placeholder: string;
  Value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  secureTextEntry?: boolean;
  error?: string;
  style?: StyleProp<ViewStyle>;
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
  style,
}: Props): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={Value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {password && (
          <TouchableOpacity onPress={toggleSecure}>
            {secureTextEntry ? (
              <AntDesign name={'eye'} size={30} />
            ) : (
              <FontAwesome name="eye-slash" size={30} />
            )}
          </TouchableOpacity>
        )}
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
