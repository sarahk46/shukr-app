import 'react-native-gesture-handler';

import { ImageBackground, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider} from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home.js';
import Journal from './Journal.js';
import WriteEntry from './WriteEntry.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// This is just for testing
import WriteEntryPart1 from './WriteEntryPart1.js';
import ViewEntry from './ViewEntry.js';
import WriteEntryPause from './WriteEntryPause.js';
import WriteEntryQ1 from './WriteEntryQ1.js';
import WriteEntryQ2 from './WriteEntryQ2.js';
import WriteEntryQ3 from './WriteEntryQ3.js';
const Tab = createBottomTabNavigator();
// For the background image:
// https://stackoverflow.com/questions/54599305/how-to-set-background-image-with-react-native-and-react-navigation

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const JournalStack = createStackNavigator();
function JournalStackScreen() {
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen name = "Journal" component = {Journal}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}
      />
      <JournalStack.Screen name = "View an Entry" component = {ViewEntry}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}
      />
    </JournalStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name = "Home Page" component = {Home}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}
      />
    </HomeStack.Navigator>
  );
}

const WriteEntryStack = createStackNavigator();
function WriteEntryStackScreen() {
  return (
    <WriteEntryStack.Navigator>
      <WriteEntryStack.Screen name = "Pause and Reflect" component = {WriteEntryPause}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}
      />
      <WriteEntryStack.Screen name = "Question 1" component = {WriteEntryQ1}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}/>
      <WriteEntryStack.Screen name = "Question 2" component = {WriteEntryQ2}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}
      />
      <WriteEntryStack.Screen name = "Question 3" component = {WriteEntryQ3}
        options={{
        header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
      }}
      />
    </WriteEntryStack.Navigator>
  );
}

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
        component={HomeStackScreen} 
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
          component={WriteEntryStackScreen}
          options={{
          tabBarLabel: 'Write an Entry',
          // tabBarLabelStyle: {color: '#F2CC8F'},
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="pen-plus" color={'#F2CC8F'} size={iconSize} />
          // ),
          }}
      />
      <Tab.Screen name="Your Journal" 
          component={JournalStackScreen} 
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
          <MyTabs />
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