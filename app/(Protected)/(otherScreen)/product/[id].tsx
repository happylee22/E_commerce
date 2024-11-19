import Loading from '@/components/Ui/Loading';
import Wrapper from '@/components/Ui/Wrapper';
import {
  useGetSimilarProducts,
  useGetSingleProduct,
} from '@/link/tanstack/queries';
import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import ErrorComponent from '@/components/Ui/ErrorComponent';

import { BottomButtons } from '@/components/BottomButtons';

import { ProductDetail } from '@/components/ProductDetail';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);

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
      <BottomButtons item={data} stock={data.stock} />
    </Wrapper>
  );
};

export default ProductDetails;
