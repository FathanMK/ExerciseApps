import {Animated, View, useWindowDimensions} from 'react-native';

import SwiperIndicatorStyles from './SwiperIndicatorStyles';
import interpolateValue from '../../../utils/interpolateValue';

interface ISwiperIndicatorProps {
  images: Array<any>;
  imagesScrollX: Animated.Value;
}

export default function SwiperIndicator({
  images,
  imagesScrollX,
}: ISwiperIndicatorProps) {
  const {width: imageWidth} = useWindowDimensions();

  const prevCurrentNextWidth = [8, 32, 8];
  const prevCurrentNextColor = [
    'rgba(255,255,255,0.6)',
    'white',
    'rgba(255,255,255,0.6)',
  ];

  return (
    <View style={SwiperIndicatorStyles.container}>
      <View style={SwiperIndicatorStyles.indicatorContainer}>
        {images.map((item, itemIndex) => {
          const inputRange = [
            imageWidth * (itemIndex - 1),
            imageWidth * itemIndex,
            imageWidth * (itemIndex + 1),
          ];
          const width = interpolateValue(
            imagesScrollX,
            inputRange,
            prevCurrentNextWidth,
          );
          const backgroundColor = interpolateValue(
            imagesScrollX,
            inputRange,
            prevCurrentNextColor,
          );
          return (
            <Animated.View
              key={item.id}
              style={{
                ...SwiperIndicatorStyles.indicator,
                width,
                backgroundColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
