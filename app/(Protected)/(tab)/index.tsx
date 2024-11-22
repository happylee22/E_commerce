import { SearchInput } from '@/components/SearchInput';
import Loading from '@/components/Ui/Loading';
import { Product } from '@/components/Ui/Product';
import Wrapper from '@/components/Ui/Wrapper';
import { useGetAllProducts } from '@/link/tanstack/queries';
import { useMemo, useState } from 'react';
import ErrorComponent from '@/components/Ui/ErrorComponent';
export default function Home() {
  const [value, setValue] = useState('');
  const { data, isPending, isError, refetch } = useGetAllProducts();
  const onClear = () => setValue('');

  const filteredProduct = useMemo(() => {
    if (!value) return data?.products || [];
    return (
      data?.products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      ) || []
    );
  }, [data?.products, value]);
  const onChange = (value: string) => setValue(value);
  if (isError) {
    return <ErrorComponent onRefetch={refetch} />;
  }

  if (isPending) return <Loading />;

  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={value} onClear={onClear} />
      <Product data={filteredProduct} />
    </Wrapper>
  );
}
