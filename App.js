import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import HomeStack from './routes/HomeStack';
import VedioScreen from './screens/VedioScreen';
import SearchScreen from "./screens/SearchScreen";
import ChannelScreen from "./screens/ChannelScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='HomeStack' component={HomeStack}/>
        <Stack.Screen name='VedioScreen' component={VedioScreen}/>
        <Stack.Screen name='SearchScreen' component={SearchScreen}/>
        <Stack.Screen name='ChannelScreen' component={ChannelScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}