import { ScrollView, Button, ChevronRightIcon, Heading, Text, Pressable, Stack, View } from 'native-base';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from './ScreenWrapper';
import React, { useContext } from 'react';
import JournalContext from './JournalContext';
import { Image } from 'react-native';

function journalEntryButton(dateToDisplay) {
  const navigation = useNavigation();
  return (
    // Need to navigate to the ViewEntry screen,
    // but this will only happen if gi
    <Pressable style={styles.journalEntryButton} onPress={() => navigation.navigate("ViewEntry")}>
        <Text marginLeft="15" fontSize="16">{dateToDisplay} </Text>
        <ChevronRightIcon marginRight="3" size="5"/>
    </Pressable>

  );
}

function displayNoEntriesYet() {
  return(
    <View flex="1" justifyContent="center">
      <View alignItems="center">
        <Image source={require('./LoadingWidgets.png')}/>
          <Text bold fontSize="18" textAlign="center">No Entries Yet!</Text>
          <Text textAlign="center">Get started by writing an entry or checking out today’s hadith!</Text>
      </View>
    </View>
  );

}

// TODO: Before release, would need to also accept
// a list of data of all entries where for each entry, also includes
// data of answers for each question
// Renders an EntryItem for each entry
function Journal({ navigation }) {
  const { journalEntries } = useContext(JournalContext);
  return (
    <ScreenWrapper>
      <ScrollView>
          {journalEntries.length > 0
          ? journalEntries.map((entry, index) => (
            <Stack key={index} direction="column" space={3} /* key={entry.id} */ >
              {/* <Text>{entry.date}</Text> */}
                <Pressable style={styles.journalEntryButton} onPress={() =>
                  navigation.navigate('View an Entry', {
                  date: 'March 15',  // get entryDate here and in the actual text too
                  entry,
                })}>
                <Text marginLeft="15" fontSize="16">March 14</Text>
                <ChevronRightIcon marginRight="3" size="5"/>
                </Pressable>
            </Stack>
          ))
          :
          displayNoEntriesYet()
          }
        
        {/* {journalEntryButton("March 13, 2023", navigation)} */}
        {/* {journalEntryButton("March 12, 2023")} */}
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Journal;