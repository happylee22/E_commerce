import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { colors } from '@/Constant';

type Props = {};

const Wrapper = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
  },
});
export default Wrapper;
