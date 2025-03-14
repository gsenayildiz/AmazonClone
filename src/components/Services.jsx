import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import ServicesCard from "./ServicesCard";
import { RecentSearchData } from "../data/RecentSearchData";

const Services = () => {
  return (
    <ScrollView
    contentContainerStyle={{paddingRight: 20}}
      style={styles.content}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image source={AmazonPay} style={styles.image} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>

          <View style={styles.row}>
            <Image source={SendMoney} style={styles.image} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.row}>
            <Image source={ScanQR} style={styles.image} />
            <Text style={styles.title}>Scan QR</Text>
          </View>

          <View style={styles.row}>
            <Image source={PayBills} style={styles.image} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item, key) => (
        <ServicesCard item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  content: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    padding: 10,
    alignItems: "center",
    paddingTop: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: "auto",
  },
  title: {
    fontSize: 10,
    color: "#000000",
    marginTop: 2,
  },
});
