import {StyleSheet} from 'react-native';

const SwiperIndicatorStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginVertical: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: 8,
    borderRadius: 3,
  },
});

export default SwiperIndicatorStyles;
