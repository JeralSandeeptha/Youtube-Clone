import React from 'react'
import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Shorts from '../screens/Shorts';
import Create from '../screens/Create';
import Subscription from '../screens/Subscription';
import Library from '../screens/Library';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={ ({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          color: 'black'
        },
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Home'){
                iconName = 'home-filled';
                color = focused ? 'black' : 'gray';
                size = 22;
            }else if(route.name === 'Shorts'){
                iconName = 'play-circle-filled';
                color = focused ? 'black' : 'gray';
                size = 22;
            }else if(route.name === 'Create'){
                iconName = 'add-circle-outline';
                color = focused ? 'black' : 'gray';
                size = 30;
            }else if(route.name === 'Subscription'){
                iconName = 'subscriptions';
                color = focused ? 'black' : 'gray';
                size = 22;
            }else if(route.name === 'Library'){
                iconName = 'video-library';
                color = focused ? 'black' : 'gray';
                size = 22;
            }
            return(
                <MaterialIcons
                    name={iconName}
                    size={size}
                    color={color}
                />
            )
        }
    })
    }
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
      />
      <Tab.Screen 
        name="Shorts" 
        component={Shorts} 
      />
      <Tab.Screen 
        name="Create" 
        component={Create} 
      />
      <Tab.Screen 
        name="Subscription" 
        component={Subscription} 
      />
      <Tab.Screen 
        name="Library" 
        component={Library} 
      />
    </Tab.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({

})