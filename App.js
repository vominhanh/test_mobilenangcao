import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';

const App = () => {

  const [fadeAnim] = useState(new Animated.Value(0));
  const [moving, setMoving] = useState(false);
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }
    ).start();
  }, []);

 
  const startMoving = () => {
    Animated.timing(position, {
      toValue: { x: 200, y: 200 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setMoving(true);
  };
  
  const restartMoving = () => {
    position.setValue({ x: 0, y: 0 });
    setMoving(false);
  };

  const stopMoving = () => {
    position.stopAnimation((value) => {
      startPosition.x = value.x;
      startPosition.y = value.y;
    });
    setMoving(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Text style={{ opacity: fadeAnim }}>
        20101791_VoMinhAnh
      </Animated.Text>
      <Animated.Text style={{ opacity: fadeAnim }}>
        Moblie Nang cao
      </Animated.Text>

      <Animated.View style={{ transform: position.getTranslateTransform() }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
      </Animated.View>
      <Button title="Start" onPress={startMoving} />
      <Button title="Stop" onPress={stopMoving} />
      <Button title="Restart" onPress={restartMoving} />
    </View>
  );
};

export default App;