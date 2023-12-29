import {
  Animated,
  ScrollView,
  View,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import SwiperImagesStyles from './SwiperImagesStyles';
import LinearGradient from 'react-native-linear-gradient';

interface ISwiperImagesProps {
  images: Array<any>;
  imagesScrollX: Animated.Value;
}

export default function SwiperImages({
  images,
  imagesScrollX,
}: ISwiperImagesProps) {
  const {width: imageWidth} = useWindowDimensions();
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      contentContainerStyle={SwiperImagesStyles.container}
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: imagesScrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )}>
      {images.map(item => (
        <View
          key={item.id}
          style={{
            ...SwiperImagesStyles.container,
            backgroundColor: item.main_color,
          }}>
          <View></View>
          <ImageBackground
            style={{...SwiperImagesStyles.images, width: imageWidth}}
            source={{
              uri: item.promo_image,
            }}>
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
              style={SwiperImagesStyles.linearGradient}
            />
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
}
