import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ProductType } from '@/Type';

type Props = {
  product: ProductType;
  index: number;
};

const ProductCard = ({ product, index }: Props) => {
  return (
    <View style={styles.card}>
      <Text>ProductCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    height: 200,
  },
});
export default ProductCard;
