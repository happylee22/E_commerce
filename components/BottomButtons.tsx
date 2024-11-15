import { colors } from '@/Constant';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  id: number;
  qty: number;
  stock: number;
};
const { width } = Dimensions.get('window');

export const BottomButtons = ({ id, qty, stock }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="home" size={30} color={colors.yellow} />
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="phone" size={30} color={colors.yellow} />
      </View>
      <Pressable style={styles.pressable}>
        <AntDesign
          name="shoppingcart"
          size={30}
          color={colors.white}
          style={styles.absCart}
        />
        <Text style={styles.pressText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    gap: 10,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.yellow,
    padding: 10,
  },
  pressable: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  pressText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  absCart: {
    position: 'absolute',
    left: 4,
  },
});
