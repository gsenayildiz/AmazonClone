import { StyleSheet, Text, View, Image } from "react-native";

const ServicesCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentTitle}>{item.title}</Text>
      <Image style={styles.recentImage} source={item.image} />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    width:140,
    padding:5,
    marginLeft:8,
    backgroundColor: "#fff",
    borderRadius:5,
  },
  recentTitle: {
    fontSize: 13,
    marginBottom:8,
    color:"#000000"
  },
  recentImage: {
    width: "100%",
    height: 130,
    margin: "auto",
  },
});
