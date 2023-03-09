import { StyleSheet, View } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Figure out redirection w/ "Reflect Now" to WriteEntry page
// NavigationContainer should be a part of the solution -- read more here: 
// https://reactnavigation.org/docs/navigating
// The packages for this are installed btw here

const fetchHadiths = async (hadithUrls) => {
  const hadiths = [];
  for (const url of hadithUrls) {
    const response = await axios.get(url);
    const hadith = response.data.hadiths[0];
    const hadithText = hadith.text;
    hadiths.push(hadithText);
  }
  return hadiths;
};

function Home({ navigation }) {
  const hadithUrls = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud/2774.min.json",
  ];

  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    fetchHadiths(hadithUrls)
      .then(hadiths => setHadiths(hadiths))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={[styles.container, { justifyContent: 'flex-start', alignItems: 'center' }]}>
      <Card>
        <Card.Title style={styles.title}>Hadith of the Day</Card.Title>
        <Card.Divider />
        <Text style={styles.fonts} h2>
            Insert Arabic text here
        </Text>
        <Text style={styles.fonts} h4>{hadiths[0]}</Text>

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