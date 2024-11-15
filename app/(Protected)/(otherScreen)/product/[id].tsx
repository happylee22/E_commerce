import Loading from '@/components/Ui/Loading';
import Wrapper from '@/components/Ui/Wrapper';
import {
  useGetSimilarProducts,
  useGetSingleProduct,
} from '@/link/tanstack/queries';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import ErrorComponent from '@/components/Ui/ErrorComponent';
import { ScrollView } from 'react-native';

import { BottomButtons } from '@/components/BottomButtons';
import { SimilarProducts } from '@/components/SimilarProducts';
import { ProductDetail } from '@/components/ProductDetail';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);
  const [qty, setQty] = useState(0);
  const {
    data: similar,
    isPending: isPendingSimilar,
    isError: isErrorSimilar,
    refetch: refetchSimilar,
  } = useGetSimilarProducts(data?.category!);
  const filterSimilarProduct = useMemo(() => {
    if (!data) return [];
    return similar?.products.filter((product) => product.id !== data.id) || [];
  }, [data?.id, similar?.products]);

  const handleRefetch = () => {
    refetch();
    refetchSimilar();
  };
  if (isError || isErrorSimilar)
    return <ErrorComponent onRefetch={handleRefetch} />;

  if (isPending || isPendingSimilar) return <Loading />;

  return (
    <Wrapper>
      <ProductDetail product={data} similar={filterSimilarProduct} />
      <BottomButtons id={data.id} stock={data.stock} qty={qty} />
    </Wrapper>
  );
};

export default ProductDetails;
