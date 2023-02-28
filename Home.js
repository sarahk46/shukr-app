import { StyleSheet, View } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
// TODO: Figure out redirection w/ "Reflect Now" to WriteEntry page
// NavigationContainer should be a part of the solution -- read more here: 
// https://reactnavigation.org/docs/navigating
// The packages for this are installed btw here

function Home({ navigation }) {
  return (
    <View style={[styles.container, { justifyContent: 'flex-start', alignItems: 'center' }]}>
      <Card>
        <Card.Title style={styles.title}>Hadith of the Day</Card.Title>
        <Card.Divider />
        <Text style={styles.fonts} h2>
            Insert Arabic text here
        </Text>
        <Text style={styles.fonts} h3>
            Insert English text here
        </Text>

        <Button
            color='#cab1bd'
            style={styles.buttonStyle}
            title="Reflect Now"
            onPress={() => alert('Pressed')}
          />

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  fonts: {
    marginBottom: 12,
    fontSize: 10,
    textAlign: 'center',
  },

  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  }
});

export default Home;