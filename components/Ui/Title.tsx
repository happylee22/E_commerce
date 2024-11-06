import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '@/Constant';

type Props = {
  title: String;
};

export const Title = ({ title }: Props) => {
  return <Text style={styles.title}> {title} </Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
});
