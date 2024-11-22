import { useFavorite } from '@/link/tanstack/zustand/favourite';
import { FlatList, Text } from 'react-native';
import { FavoriteItem } from './FavouriteItem';

export const Favorite = () => {
  const items = useFavorite((state) => state.items);
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <FavoriteItem item={item} />}
      contentContainerStyle={{ gap: 15, paddingHorizontal: 10 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          You have nothing in favorite
        </Text>
      )}
      style={{ marginTop: 20 }}
    />
  );
};
