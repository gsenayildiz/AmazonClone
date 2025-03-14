import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecommendedProduct from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.image} source={RecommendedProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.textPrice}>1,9999 ₺</Text>
          <Text style={styles.price}>999 ₺</Text>
        </View>

        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Cleanser for Radiant, Soft, and Hydrated Skin.
        </Text>

        <TouchableOpacity>
          <Text style={styles.alldeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000000",
  },
  image: {
    width: "100%",
    height: 250,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    width: 60,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  offDeal: {
    fontSize: 12,
    color: "#ffffff",
  },
  deal: {
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 12,
  },
  textPrice: {
    color: "#000000",
    fontSize: 10,
    marginVertical: 10,
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 16,
    marginLeft: 7,
  },
  productName: {
    fontSize: 16,
    color: "#000000",
  },
  alldeals: {
    fontSize: 16,
    color: "#D2665A",
    marginVertical: 10,
  },
});
