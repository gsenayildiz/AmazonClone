import { Image, StyleSheet, Text, View } from "react-native";
import Brand1 from "../assets/brand1.jpeg";
import Brand2 from "../assets/brand2.jpeg";
import Brand3 from "../assets/brand3.jpeg";
import Brand4 from "../assets/brand4.jpeg";

const Brands = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands Of Day</Text>

      <View style={styles.row}>
        <View style={styles.brands}>
          <Image style={styles.image} source={Brand1} />
          <Text style={styles.brandText}>
            Min. 20% off | Fossil, Titan Smart Watch & More
          </Text>
        </View>
        <View style={styles.brands}>
          <Image style={styles.image} source={Brand2} />
          <Text style={styles.brandText}>
            Heels - Upto 50% OFF on Heeled Sandals, High Heel
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.brands}>
          <Image style={styles.image} source={Brand3} />
          <Text style={styles.brandText}>
            Sony 60W Bluetooth Speaker Audio Engine
          </Text>
        </View>
        <View style={styles.brands}>
          <Image style={styles.image} source={Brand4} />
          <Text style={styles.brandText}>
            Min. 20% off | Fossil, Titan Smart Watch & More
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  title: {
    fontSize: 18,
    color: "#000000",
    padding: 10,
    fontWeight: "bold",
  },
  row: { flexDirection: "row" },
  brands: {
    width: "50%",
    padding: 4,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  brandText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 5,
  },
});
