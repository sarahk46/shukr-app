import { ImageBackground, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider} from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import Journal from './Journal.js';
import WriteEntry from './WriteEntry.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// This is just for testing
import WriteEntryPart1 from './WriteEntryPart1.js';
import ViewEntry from './ViewEntry.js';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
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
    <Tab.Navigator initialRouteName='Home' 
      screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#3d405b'},
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Write an Entry') {
              iconName = focused 
              ? 'pencil'
              : 'pencil-outline';
            } else if (route.name === 'Your Journal') {
              iconName = focused ?
              'book'
              : 'book-outline';
            }
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F2CC8F',
          tabBarInactiveTintColor: 'gray',
        })}
      
      >
      <Tab.Screen name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          // If want to do the header:
          // headerShown: true,
          // headerTintColor: '#F2CC8F',
          // tabBarLabelStyle: {color: '#F2CC8F'},
          // // tabBarActiveTintColor: { color: '#ffff'},
          // tabBarIcon: ({ tintColor, size, color}) => (
          //   <MaterialCommunityIcons name={"home"} color={'#F2CC8F'} size={iconSize} />
          // ),
          // tabBarActiveTintColor: '#F2CC8F',
          // tabBarInactiveTintColor: 'grey'
        }}/>
      <Tab.Screen name="Write an Entry" 
          component={WriteEntry}
          options={{
          tabBarLabel: 'Write an Entry',
          // tabBarLabelStyle: {color: '#F2CC8F'},
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="pen-plus" color={'#F2CC8F'} size={iconSize} />
          // ),
          }}
      />
      <Tab.Screen name="Your Journal" 
          component={Journal} 
          options={{
          tabBarLabel: 'Your Journal',
          // tabBarLabelStyle: {color: '#F2CC8F'},
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="notebook" color={'#F2CC8F'} size={iconSize} />
          // ),
          }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NativeBaseProvider>
      <ImageBackground source={require('./v1BackgroundImage.png')} style={styles.backgroundImage}>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#3D405B',
    color: '#3D405B',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;
