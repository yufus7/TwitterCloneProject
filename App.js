import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tweet from "./screen/Tweet";
import { SafeAreaView, Text, Button } from "react-native";
import {Ionicons} from '@expo/vector-icons'




const Search = () =>{
  return(
    <SafeAreaView>
      <Text>Hi, Search screen!</Text>
    </SafeAreaView>
  )
}

const Notification = () =>{
  return(
    <SafeAreaView>
      <Text>Hi, Notification screen!</Text>
    </SafeAreaView>
  )
}
const Message = () =>{
  return(
    <SafeAreaView>
      <Text>Hi, Message screen!</Text>
    </SafeAreaView>
  )
}

const Tabs = createBottomTabNavigator()

const TabsScreen = ()=> (
 
  <Tabs.Navigator  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (route.name === 'Search') {
        iconName = focused ? 'search' : 'search-outline';
      }
      else if (route.name === 'Notification') {
        iconName = focused ? 'notifications' : 'notifications';
      }
      else if (route.name === 'Message') {
        iconName = focused ? 'mail' : 'mail-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#00ACEE',
    tabBarInactiveTintColor: 'gray',
  })}>

<Tabs.Screen name="Home" component={Tweet}/>

<Tabs.Screen name="Search" component={Search}/>

<Tabs.Screen name="Notification" component={Notification}/>

<Tabs.Screen name="Message" component={Message}/>
</Tabs.Navigator>
)
const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown:false}}>
        <MainStack.Screen name="Tabs" component={TabsScreen}/>
      </MainStack.Navigator>
    </NavigationContainer>
  )
  //return <Tweet/>
}

export default App;