import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ProductData } from "../data/ProductData";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helpers";

const ProductsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagLine}>
        Price end other details may very based on products asidean and color
      </Text>
      {ProductData.map((item, key) => (
        <View style={styles.productSection}>
          <View style={styles.productImageSection}>
            <Image style={styles.productImage} source={item.image} />
          </View>

          <View style={styles.productDetailSection}>
            <Text style={styles.sponsored}>Sponsored</Text>
            <Text style={styles.productName}>{item.productName}</Text>

            <View style={styles.row}>
              <Text style={styles.rating}> {item.rating}</Text>
              {getRating(item.rating)}
              <Text style={styles.ratingCount}> {item.ratingCount}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.price}> {item.price}₺</Text>
              <Text style={styles.crossout}> {item.crossOutText}</Text>
            </View>

            <Text style={styles.cashback}>
              Up to 5% cashback with Amazon Pay Credit card
            </Text>

            <Image source={PrimeLogo} style={styles.logo} />

            <Text style={styles.cashback}>
              FREE Delivery by {item.deliveryBy}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tagLine: {
    fontSize: 11,
    color: "gray",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productSection: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    marginVertical: 15,
  },
  productImageSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: "#000000",
  },
  productName: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: "#D2665A",
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: "#D2665A",
  },
  price: {
    fontSize: 16,
    color: "#000000",
    marginRight: 5,
  },
  crossout: {
    fontSize: 10,
    color: "gray",
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
