import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Colors } from '@/constants/Colors';
import { colors } from '@/Constant';

type Props = {};

const Wrapper = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
export default Wrapper;
