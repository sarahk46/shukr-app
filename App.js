import { ImageBackground, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import Journal from './Journal.js';
import WriteEntry from './WriteEntry.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const iconSize = 36;
// For the background image:
// https://stackoverflow.com/questions/54599305/how-to-set-background-image-with-react-native-and-react-navigation
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

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
      <ImageBackground source={require('./BackgroundImage.png')} style={styles.image}>
        <NavigationContainer theme={navTheme}>
          <MyTabs />
        </NavigationContainer>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#3D405B',
    color: '#3D405B',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;
