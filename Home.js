import { Text, Button, Stack, View, Divider, ScrollView } from 'native-base';
import {Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HadithCard from './HadithCard';
import ScreenWrapper from './ScreenWrapper';
import Journal from './Journal.js';
import WriteEntry from './WriteEntry.js';

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

function displayComingSoon() {
  return(
    <View alignItems="center" marginTop="30">
      <Image source={require('./LoadingWidgets.png')}/>
        <Text bold fontSize="14">Coming Soon!</Text>
        <Text>More widgets to come soon!</Text>
    </View>
  );
}

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
    <ScreenWrapper>
      <ScrollView>
        <HadithCard isHomeCard={true}/>
        {displayComingSoon()}
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Home;