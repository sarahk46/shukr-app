import { Box, Heading, Text, Button, NativeBaseProvider, Stack, View, Divider, ScrollView } from 'native-base';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles';
import EntryItem from './EntryItem';
import HadithCard from './HadithCard';

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
    <ScrollView>
      <HadithCard isHomeCard={true}/>

      <Text bold italic style={styles.title}>Past Entries</Text>
      
      <EntryItem title="Entry 1" hadith="Hadith Info" />
      <EntryItem title="Entry 2" hadith="Hadith Info" />
      <EntryItem title="Entry 3" hadith="Hadith Info" />
    </ScrollView>

  </NativeBaseProvider>

  );
}

export default Home;