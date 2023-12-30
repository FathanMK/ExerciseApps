import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Pressable, Text, View} from 'react-native';

export default function TestScreen() {
  const [widthTab, setWidthTab] = useState(0);
  const position = useRef(new Animated.Value(0)).current; // Initial value for left:0

  const moveAnimation = (toValue: any) => {
    Animated.timing(position, {
      toValue: toValue,
      duration: 300,
      easing: Easing.bezier(0.46, 0.09, 0.32, 0.78),
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
        }}>
        <Animated.View
          style={{
            height: 3,
            width: widthTab,
            position: 'absolute',
            left: position,
            top: 0,
            backgroundColor: 'red',
          }}
        />
        {[0, 1, 2, 3, 4, 5].map(item => (
          <Pressable
            key={item}
            style={{flex: 1}}
            onLayout={e => setWidthTab(e.nativeEvent.layout.width)}
            onPress={() => moveAnimation(item * widthTab)}>
            <Text>Home</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
