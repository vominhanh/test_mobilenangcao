import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bai3 from "./bai3";
// import Bai1_2 from "./bai1_2";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Bai1_2/> */}
      <Bai3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});