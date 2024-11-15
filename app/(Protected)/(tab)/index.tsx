import Loading from '@/components/Ui/Loading';
import SearchInput from '@/components/Ui/SearchInput';
import Wrapper from '@/components/Ui/Wrapper';
import { useGetAllProducts } from '@/link/tanstack/queries';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import ErrorComponent from '@/components/Ui/ErrorComponent';
import { Product } from '@/components/Ui/Product';

export default function Home() {
  const [value, setValue] = useState('');
  const onClear = () => setValue('');
  const { data, isPending, isError, refetch } = useGetAllProducts();

  const onchange = (value: string) => {
    setValue(value);
  };
  if (isError) {
    return <ErrorComponent onRefetch={refetch} />;
  }
  if (isPending) return <Loading />;

  return (
    <Wrapper>
      <SearchInput onChange={onchange} value={value} onClear={onClear} />
      <Product data={data.products} />
    </Wrapper>
  );
}
