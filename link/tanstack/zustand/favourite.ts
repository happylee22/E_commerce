import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type FavItem = {
  title: string;
  image: string;
  price: number;
  id: number;
};
type Store = {
  items: FavItem[];
  toggleFavItem: (item: FavItem) => void;
  isInFavorite: (id: number) => boolean;
};

export const useFavorite = create<Store>()(
  persist(
    (set, get) => ({
      items: [],
      toggleFavItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            const filteredArray = state.items.filter((i) => i.id !== item.id);

            return { items: filteredArray };
          }
          return { items: [...state.items, item] };
        }),
      isInFavorite: (id) => {
        const initialArray = get().items;
        const isInFav = initialArray.find((i) => i.id === id);

        return !!isInFav;
      },
    }),
    { name: 'favorite', storage: createJSONStorage(() => AsyncStorage) }
  )
);
