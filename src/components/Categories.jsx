import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Category } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../utils/router";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item, key) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate(SCREENS.PRODUCTSCREEN)}
          style={styles.category}
        >
          <Image source={item.image} style={styles.images} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  images: {
    width: 50,
    height: 50,
  },
  title: {
    color: "#2c4341",
  },
});
