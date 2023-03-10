import { Container, Text, Button, NativeBaseProvider } from 'native-base';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles';


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
    <NativeBaseProvider>
    <Container style={styles.container}>
      <Container style={styles.box}>
        <Text style={styles.title}>Hadith of the Day</Text>
        <Text style={styles.hadithTextArabic}>Arabic Text</Text>
        <Text style={styles.hadithTextEnglish}>English Text</Text>
        <Button style={styles.button} variant="solid">
          <Text style={styles.buttonText}>Reflect Now!</Text>
        </Button>
      </Container>
    </Container>
  </NativeBaseProvider>

  );
}

export default Home;