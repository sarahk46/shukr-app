import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import Settings from './Settings.js';
import Journal from './Journal.js';
import WriteEntry from './WriteEntry.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const iconSize = 36;

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Salam!' 
      screenOptions= {{
        tabBarStyle: { backgroundColor: '#3d405b'},
        headerShown: false,
      }}>
      <Tab.Screen name="Salam!" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: '#F2CC8F'},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#F2CC8F'} size={iconSize} />
          ),
        }}/>
      <Tab.Screen name="Write an Entry" 
          component={WriteEntry}
          options={{
          tabBarLabel: 'Write an Entry',
          tabBarLabelStyle: {color: '#F2CC8F'},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pen-plus" color={'#F2CC8F'} size={iconSize} />
          ),
          }}
      />
      <Tab.Screen name="Your Journal" 
          component={Journal} 
          options={{
          tabBarLabel: 'Your Journal',
          tabBarLabelStyle: {color: '#F2CC8F'},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook" color={'#F2CC8F'} size={iconSize} />
          ),
          }}
      />

    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    backgroundColor: '#3D405B',
    color: '#3D405B',
  },
});

export default App;
