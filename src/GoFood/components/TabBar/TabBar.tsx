import {useRef} from 'react';
import {View, Text, Pressable, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {TabBarStyles, gradientColor} from './TabBarStyles';

export default function TabBar({state, descriptors, navigation}: any) {
  const widthTab = useRef(0);
  const positionAnimValue = useRef(new Animated.Value(0)).current;

  const slideBorderTopTab = (toValue: any) => {
    Animated.timing(positionAnimValue, {
      toValue: toValue,
      duration: 300,
      easing: Easing.bezier(0.46, 0.09, 0.32, 0.78),
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={TabBarStyles.container}>
      <Animated.View
        style={{
          ...TabBarStyles.animatedView,
          width: widthTab.current,
          left: positionAnimValue,
        }}
      />
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const Icon = ({color, size}: any) => {
          return options.tabBarIcon ? options.tabBarIcon({color, size}) : <></>;
        };
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = (index: number) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }

          slideBorderTopTab(index * widthTab.current);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={() => onPress(index)}
            onLongPress={onLongPress}
            onLayout={e => (widthTab.current = e.nativeEvent.layout.width)}
            style={{
              flex: 1,
            }}>
            <LinearGradient
              style={TabBarStyles.gradientContainer}
              colors={gradientColor(isFocused) as any}>
              <Icon color={isFocused ? '#00ab14' : '#222'} size={18} />
              <Text
                style={{
                  fontWeight: isFocused ? '900' : '500',
                  fontSize: 10,
                }}>
                {label}
              </Text>
            </LinearGradient>
          </Pressable>
        );
      })}
    </View>
  );
}
