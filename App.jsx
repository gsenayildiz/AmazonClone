import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { StatusBar, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D2665A" }}>
      <StatusBar barStyle={"default"} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
