import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

export default function GoFoodApp() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
