import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import TabBar from '../components/TabBar/TabBar';
import {
  BadgePercent,
  BaggageClaimIcon,
  ClipboardListIcon,
  CompassIcon,
  SearchIcon,
} from 'lucide-react-native';
import PickupScreen from '../screens/Pickup/PickupScreen';
import PromoScreen from '../screens/Promos/PromosScreen';
import HistoryScreen from '../screens/History/HistoryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../screens/Test/TestScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <CompassIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pickup"
        component={PickupScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BaggageClaimIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SearchIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Promos"
        component={PromoScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BadgePercent size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ClipboardListIcon size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// export default function Router() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Test" component={TestScreen} />
//     </Stack.Navigator>
//   );
// }
