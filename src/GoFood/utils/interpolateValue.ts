import {Animated} from 'react-native';

export default function interpolateValue(
  value: Animated.Value,
  inputRange: number[],
  outputRange: number[] | string[],
) {
  return value.interpolate({inputRange, outputRange, extrapolate: 'clamp'});
}
