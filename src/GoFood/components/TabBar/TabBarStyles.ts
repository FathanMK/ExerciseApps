import {StyleSheet} from 'react-native';

const TabBarStyles = StyleSheet.create({
  container: {flexDirection: 'row', height: 58, position: 'relative'},
  animatedView: {
    height: 3,
    position: 'absolute',
    top: 0,
    backgroundColor: '#00ab14',
  },
  gradientContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});

const gradientColor = (isFocused: boolean) => {
  return isFocused
    ? [
        'rgba(0,171,20,0.15)',
        'rgba(0,171,20,0.1)',
        'rgba(0,171,20,0)',
        'rgba(0,171,20,0)',
        'rgba(0,171,20,0)',
        'rgba(0,171,20,0)',
      ]
    : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'];
};

export {TabBarStyles, gradientColor};
