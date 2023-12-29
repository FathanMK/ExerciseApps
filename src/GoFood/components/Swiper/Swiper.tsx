import {View} from 'react-native';

import SwiperStyles from './SwiperStyles';
import {ReactNode} from 'react';

interface ISwiperProps {
  children: ReactNode;
}

export default function Swiper({children}: ISwiperProps) {
  return <View style={SwiperStyles.container}>{children}</View>;
}
