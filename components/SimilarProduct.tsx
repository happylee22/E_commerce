import { colors } from '@/Constant';
import { ProductResponse } from '@/type';
import { trimText } from '@/utils';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  product: ProductResponse;
  index?: number;
  width?: number;
  height?: number;
};

export const ProductCard = ({
  index = 0,
  product,
  width,
  height,
}: Props): JSX.Element => {
  const router = useRouter();
  // to check percentage discount
  const newPriceBasedOnDiscountPercentage =
    (product.price * (100 - product.discountPercentage)) / 100;
  // to make the discount have two decimal places
  const priceWithDiscount = newPriceBasedOnDiscountPercentage.toFixed(2);
  // to check if there is discount
  const thereIsDiscount = product.discountPercentage > 0;
  const onPress = () => {
    router.push(`/product/${product.id}`);
  };
  const percentageDiscount = (product.discountPercentage / 100) * 100;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          marginLeft: index % 1 === 0 ? 10 : 0,
          marginBottom: 20,
          opacity: pressed ? 0.5 : 1,
          width,
          height: height ? height : 400,
        },
      ]}
    >
      <View style={styles.discountContainer}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          -{percentageDiscount}%
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.images[0] }}
          placeholder={require('~/assets/gig.gif')}
          contentFit="cover"
          style={styles.image}
          placeholderContentFit="contain"
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text style={styles.title}>{trimText(product.title)}</Text>
        {!width && <Text>{product.category}</Text>}
        <Text
          style={{
            textDecorationLine: thereIsDiscount ? 'line-through' : 'none',
            fontWeight: 'bold',
            color: '#ccc',
          }}
        >
          ₦{product.price}
        </Text>
        {thereIsDiscount && (
          <Text style={{ fontWeight: 'bold' }}>₦{priceWithDiscount}</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderRadius: 5,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  discountContainer: {
    position: 'absolute',
    top: 4,
    right: -6,
    backgroundColor: colors.yellow,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    zIndex: 10,
  },
});
