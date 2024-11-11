import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/Constant';

type Props = {
  focused: boolean;
  name: React.ComponentProps<typeof AntDesign>['name'];
  size: number;
};

const TabsIcon = ({ focused, name, size }: Props): JSX.Element => {
  return (
    <AntDesign
      name={name}
      size={size}
      color={focused ? colors.yellow : colors.dark}
      style={{ marginBottom: -3 }}
    />
  );
};

export default TabsIcon;

const styles = StyleSheet.create({});
