import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
        {CarouselData.map((item, key) => (
          <View key={item.id}>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
   // position: "relative",
  },
  wrapper: {
    height: 300,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
});
