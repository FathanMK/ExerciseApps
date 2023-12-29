import {Animated, StatusBar, View} from 'react-native';
import PromosImage from './data/PromosImage';
import HomeScreenStyles from './HomeScreenStyles';
import {useRef} from 'react';

import Swiper from '../../components/Swiper/Swiper';
import SwiperImages from '../../components/Swiper/SwiperImages/SwiperImages';
import SwiperIndicator from '../../components/Swiper/SwiperIndicator/SwiperIndicator';

export default function HomeScreen() {
  const promoImagesScrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={HomeScreenStyles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Swiper>
        <SwiperImages images={PromosImage} imagesScrollX={promoImagesScrollX} />
        <SwiperIndicator
          images={PromosImage}
          imagesScrollX={promoImagesScrollX}
        />
      </Swiper>
    </View>
  );
}
