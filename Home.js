import { Box, Heading, Text, Button, NativeBaseProvider, VStack } from 'native-base';
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
    {/* <Container style={styles.container}>
      <Container style={styles.box}>
        <Text style={styles.title}>Hadith of the Day</Text>
        <Text style={styles.hadithTextArabic}>Arabic Text</Text>
        <Text style={styles.hadithTextEnglish}>English Text</Text>
        <Button style={styles.button} variant="solid">
          <Text style={styles.buttonText}>Reflect Now!</Text>
        </Button>
      </Container>
    </Container> */}
    <Box style={styles.hadithBox}>
        <Text bold italic style={styles.title}>HADITH OF THE DAY</Text>
        <Text style={styles.hadithTextArabic}> 
دَّثَنَا قَبِيصَةُ، حَدَّثَنَا سُفْيَانُ، عَنْ أَبِي حَازِمٍ، عَنْ سَهْلِ بْنِ سَعْدٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ " الرَّوْحَةُ وَالْغَدْوَةُ فِي سَبِيلِ اللَّهِ أَفْضَلُ مِنَ الدُّنْيَا وَمَا فِيهَا</Text>
        <Text style={styles.citationText}> (Bukhari, 2794) </Text>
        <Text style={styles.hadithTextEnglish}>Narrated Sahl bin Sa`d: The Prophet (ﷺ) said, "A single endeavor in Allah's Cause in the afternoon and in the forenoon is better than the world and whatever is in it.”</Text>
        <Button style={styles.button} variant="solid" _text={{color: "#fffff"}}>
        Reflect Now!
        </Button>
    </Box>
  </NativeBaseProvider>

  );
}

export default Home;