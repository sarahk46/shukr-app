import { Text, Button, NativeBaseProvider, ChevronLeftIcon, CloseIcon, Input, Stack, View, Divider, ScrollView } from 'native-base';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
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

function topBarWithEscOnly() {
  return (
    <View style={styles.topBar}>
      <Text alignSelf="center" fontSize="16" left="150" textAlign="center">March 14, 2022</Text>
      <Button
        left="250"
        startIcon={<CloseIcon />}
        _icon={{ color: "black" }}
        style={styles.button}
      />
    </View>
  );
}

function topBarWithBackAndEsc() {
  return (
    <View marginTop="10"
      marginBottom="10"
      flexDirection="row" alignItems="center" flexWrap="wrap">
      <Button
        left="10"
        startIcon={<ChevronLeftIcon />}
        _icon={{ color: "black" }}
        style={styles.button}
      />
      <Text left="100" alignSelf="center" fontSize="16" textAlign="center">March 14, 2022</Text>
      <Button
        left="175"
        startIcon={<CloseIcon />}
        _icon={{ color: "black" }}
        style={styles.button}
      />
    </View>

  );
}

function WriteEntryPart1({ navigation }) {
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
    <NativeBaseProvider alignItems="center">
      {/* <View alignContent="center"> */}
      {topBarWithBackAndEsc()}
      <ScrollView>
        <HadithCard isHomeCard={false} />
        <Text

          style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
        <Input width="95%"
          alignSelf="center"
          // placeholder="Question 1 Answer" 
          placeholder="Type your response here..."
          multiline={true}
          style={styles.entryInput}
        />

        <ContinueButton />

      </ScrollView>
      {/* </View> */}


    </NativeBaseProvider>

  );
}

export default WriteEntryPart1;