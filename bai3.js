import { View, Text, Animated, Image, TextInput, Pressable, Button } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai3 = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const spinCircleValue = useRef(new Animated.Value(0)).current;
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });
  const spinCircle = spinCircleValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinCircleValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(spinValue, {
          toValue: -1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(spinValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ bottom: 10, position: "absolute", right: 0 }}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Image
            source={require("./image/bell.jpg")}
            resizeMode="stretch"
            style={{ width: 50, height: 50 }}
          />
        </Animated.View>
      </View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ rotate: spinCircle }]
        }}
      >
        <Text>Anh</Text>
      </Animated.View>
      <View style={{marginTop:10}}>
        <Animated.View>
            <TextInput placeholder="Username" style={{borderWidth:1, borderColor:'black',margin:5}} />
            <TextInput placeholder="Password" style={{borderWidth:1, borderColor:'black', margin:5}} />
        </Animated.View>
        <View>
            <Button title="Show" onPress={() => console.log('Show pressed')} />
            <Button title="Login" onPress={() => console.log('Login pressed')} />
            <Button title="Cancel" onPress={() => console.log('Cancel pressed')} />
        </View>
      </View>
    </View>
  );
};

export default Bai3;