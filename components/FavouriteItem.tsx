import { colors } from '@/Constant';
import { FavItem, useFavorite } from '@/link/tanstack/zustand/favourite';
import { trimText } from '@/utils';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  item: FavItem;
};

export const FavoriteItem = ({ item }: Props): JSX.Element => {
  const toggleFav = useFavorite((state) => state.toggleFavItem);
  const router = useRouter();
  const handleFav = () => {
    toggleFav(item);
  };
  return (
    <TouchableOpacity
      onPress={() => router.push(`/product/${item.id}`)}
      style={styles.card}
    >
      <Image
        source={item.image}
        style={{ width: 100, height: 100 }}
        contentFit="cover"
      />
      <View>
        <Text>{trimText(item.title, 30)}</Text>
        <Text>₦{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.icon} onPress={handleFav}>
        <AntDesign name="heart" color={colors.yellow} size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    borderRadius: 8,
    elevation: 6,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 7,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    padding: 5,
  },
});
