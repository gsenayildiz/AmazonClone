import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Feather,SimpleLineIcons} from '@expo/vector-icons';

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#D2665A", "#E16A54", "#F39E60"]}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
    >
        <Feather name="map-pin" size={16} color="#ECDFCC" />
        <Text style={styles.deliver}>
            Delivery to Turkey - 232425
        </Text>
        <SimpleLineIcons name="arrow-down" size={14} color="#ECDFCC" />

    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
    container:{
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
    },
    deliver:{
        fontSize: 13,
        color:"#FBD288",
        paddingHorizontal:6,
    },
});
