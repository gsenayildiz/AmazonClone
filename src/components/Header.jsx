import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#D2665A", "#E16A54", "#F39E60"]}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
    >
      <View style={styles.inputBox}>
        <View style={styles.row}>
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            placeholder="Search Amazon.."
            placeholderTextColor={"#848484"}
            style={styles.textInput}
          />
        </View>
        <AntDesign name="scan1" size={24} color="black" />
      </View>
      <Entypo name="mic" size={24} color="black" />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#F6DED8",
    width: "92%",
    justifyContent: "space-between",
    paddingHorizontal: "10",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    padding: 10,
  },
});
