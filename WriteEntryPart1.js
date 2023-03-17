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

// function displayComingSoon() {
//   return(
//     <View alignItems="center" marginTop="30">
//       <Image source={require('./LoadingWidgets.png')}/>
//         <Text bold fontSize="14">Coming Soon!</Text>
//         <Text>More widgets to come soon!</Text>
//     </View>
//   );
// }

function topBarWithEscOnly() {
    return(
        <View marginTop="10"
        marginBottom="10"
        flexDirection="row" alignItems="center" flexWrap="wrap">
            <Text alignSelf="center" fontSize="16" left="150" textAlign="center">March 14, 2022</Text>
            <Button
            left="250"
            startIcon={<CloseIcon/>}
            _icon={{color: "black"}}
            style={styles.button}
            />
        </View>

    );
}

function topBarWithBackAndEsc() {
    return(
        <View marginTop="10"
        marginBottom="10"
        flexDirection="row" alignItems="center" flexWrap="wrap">
        <Button
            left="10"
            startIcon={<ChevronLeftIcon/>}
            _icon={{color: "black"}}
            style={styles.button}
            />
            <Text left="100" alignSelf="center" fontSize="16" textAlign="center">March 14, 2022</Text>
            <Button
            left="175"
            startIcon={<CloseIcon/>}
            _icon={{color: "black"}}
            style={styles.button}
            />
        </View>

    );
}

function pauseAndReflect() {
    return(
    <NativeBaseProvider alignItems="center">
    {/* <View alignContent="center"> */}
    {topBarWithEscOnly()}
    <ScrollView>
        
        <Text bold fontSize="30" color='grey' textAlign="center" marginBottom="10">Pause and Reflect</Text>
        <HadithCard isHomeCard={false}/>
        <Text marginTop="10" fontSize="20" textAlign="center" >Once you're done reading...</Text>
        <ContinueButton/>
      
    </ScrollView>
    {/* </View> */}


  </NativeBaseProvider>
    );

}

function question1Reflection() {
    return (
    <NativeBaseProvider alignItems="center">
    {/* <View alignContent="center"> */}
    {topBarWithBackAndEsc()}
    <ScrollView>
        <HadithCard isHomeCard={false}/>
        <Text 
        
        style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
        <Input width="95%"
            alignSelf="center"
            // placeholder="Question 1 Answer" 
            placeholder="Type your response here..."
            multiline={true}
            style={styles.entryInput}
        />

        <ContinueButton/>
      
    </ScrollView>
    {/* </View> */}
  </NativeBaseProvider>
    );
}

function question2Reflection() {
    return (
        <NativeBaseProvider alignItems="center">
        {/* <View alignContent="center"> */}
        {topBarWithBackAndEsc()}
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            
            style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
            <Input width="95%"
                alignSelf="center"
                // placeholder="Question 1 Answer" 
                placeholder="Type your response here..."
                multiline={true}
                style={styles.entryInput}
            />
    
            <ContinueButton/>
          
        </ScrollView>
        {/* </View> */}
    
    
      </NativeBaseProvider>
    
      );
}

function question3Reflection() {
    return (
    <NativeBaseProvider alignItems="center">
    {/* <View alignContent="center"> */}
    {topBarWithBackAndEsc()}
    <ScrollView>
        <HadithCard isHomeCard={false}/>
        <Text 
        
        style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
        <Input width="95%"
            alignSelf="center"
            // placeholder="Question 1 Answer" 
            placeholder="Type your response here..."
            multiline={true}
            style={styles.entryInput}
        />

        <ContinueButton/>
      
    </ScrollView>
    {/* </View> */}


  </NativeBaseProvider>

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
        <HadithCard isHomeCard={false}/>
        <Text 
        
        style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
        <Input width="95%"
            alignSelf="center"
            // placeholder="Question 1 Answer" 
            placeholder="Type your response here..."
            multiline={true}
            style={styles.entryInput}
        />

        <ContinueButton/>
      
    </ScrollView>
    {/* </View> */}


  </NativeBaseProvider>

  );
}

export default WriteEntryPart1;