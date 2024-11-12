import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { CustomInput } from '../Form/CustomInput';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/Constant';

type props = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

const SearchInput = ({ onChange, value, onClear }: props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" color={colors.dark} size={25} />
      <CustomInput
        Value={value}
        onChangeText={onChange}
        placeholder="Search"
        style={{ borderWidth: 0, flex: 1 }}
      />
      {value && (
        <Pressable onPress={onClear}>
          <AntDesign name="close" color={colors.dark} size={25} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.dark,
    borderWidth: 1,
    height: 60,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
export default SearchInput;
