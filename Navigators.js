// Screen Stack navigators
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home.js';
import Journal from './Screens/Journal.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewEntry from './Screens/ViewEntry.js';
import WriteEntryPause from './Screens/WriteEntryPause.js';
import WriteEntryQ1 from './Screens/WriteEntryQ1.js';
import WriteEntryQ2 from './Screens/WriteEntryQ2.js';
import WriteEntryQ3 from './Screens/WriteEntryQ3.js';
import LoginScreen from './Screens/LoginScreen';

const JournalStack = createStackNavigator();
function JournalStackScreen() {
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen name="Journal" component={Journal}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
      <JournalStack.Screen name="View an Entry" component={ViewEntry}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
    </JournalStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  const initialScreen = 'Login Page';
  return (
    <HomeStack.Navigator initialRouteName={initialScreen}>
      <HomeStack.Screen name="Home Page" component={Home}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
      <HomeStack.Screen name="Login Page" component={LoginScreen}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
    </HomeStack.Navigator>
  );
}

const WriteEntryStack = createStackNavigator();
function WriteEntryStackScreen() {
  // TODO: add functionality (using Context or something else) to determine if
  // entry has already been written for the day - if so, display a "Already journaled today" screen
  const initialScreen = 'Pause and Reflect';
  return (
    <WriteEntryStack.Navigator initialRouteName={initialScreen}>
      <WriteEntryStack.Screen name="Pause and Reflect" component={WriteEntryPause}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
      <WriteEntryStack.Screen name="Question 1" component={WriteEntryQ1}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }} />
      <WriteEntryStack.Screen name="Question 2" component={WriteEntryQ2}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
      <WriteEntryStack.Screen name="Question 3" component={WriteEntryQ3}
        options={{
          header: ({ navigation }) => null // This will hide the header, but you can also pass in a custom header component that receives the navigation prop
        }}
      />
    </WriteEntryStack.Navigator>
  );
}

// top-level Tab navigator
const Tab = createBottomTabNavigator();
export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#3d405b' },
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
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          navigation: navigation,
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
        })} />
      <Tab.Screen name="Write an Entry"
        component={WriteEntryStackScreen}
        options={({ navigation }) => ({
          tabBarLabel: 'Write an Entry',
          navigation: navigation,
          // tabBarLabelStyle: {color: '#F2CC8F'},
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="pen-plus" color={'#F2CC8F'} size={iconSize} />
          // ),
        })}
      />
      <Tab.Screen name="Your Journal"
        component={JournalStackScreen}
        options={({ navigation }) => ({
          tabBarLabel: 'Your Journal',
          navigation: navigation,
          // tabBarLabelStyle: {color: '#F2CC8F'},
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="notebook" color={'#F2CC8F'} size={iconSize} />
          // ),
        })}
      />
    </Tab.Navigator>
  );
}