import { View, Text } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { ProductType } from '@/Type';
import ProductCard from './ProductCard';

type Props = {
  data: ProductType[];
};

const Product = ({ data }: Props) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlashList
        data={data}
        estimatedItemSize={200}
        renderItem={({ item, index }) => (
          <ProductCard product={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default Product;
