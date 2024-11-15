import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Carousel from 'pinar';
import { Image } from 'expo-image';

type Props = {
  images: string[];
};
const { height } = Dimensions.get('window');
const Slider = ({ images }: Props) => {
  return (
    <Carousel
      style={{ height: height * 0.4 }}
      showsDots={false}
      loop
      autoplay
      showsControls={false}
    >
      {images.map((image) => (
        <View style={styles.imageContainer} key={image}>
          <Image
            style={styles.image}
            contentFit="contain"
            source={{ uri: image }}
            placeholder={'/asset/images/favicon.png'}
            placeholderContentFit="contain"
          />
        </View>
      ))}
    </Carousel>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Slider;
