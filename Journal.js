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
      <ChevronRightIcon marginRight="3" size="5" />
    </Pressable>

  );
}

function NoEntriesYet() {
  return (
    <View style={styles.centerContainer}>
      <View>
        <Image source={require('./LoadingWidgets.png')} alignSelf="center" />
        <Text bold fontSize="18" textAlign="center">No Entries Yet!</Text>
        <Text textAlign="center" marginTop="5">Get started by writing an entry or checking out today’s hadith!</Text>
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
    journalEntries.length > 0
      ?
      <ScreenWrapper>
        <ScrollView>
          {journalEntries.map((entry, index) => (
            <Stack key={index} direction="column" space={3} /* key={entry.id} */ >
              <Pressable style={styles.journalEntryButton} onPress={() =>
                navigation.navigate('View an Entry', {
                  entry,
                })}>
                <Text marginLeft="15" fontSize="16">{entry.date}</Text>
                <ChevronRightIcon marginRight="3" size="5" />
              </Pressable>
            </Stack>
          ))}
        </ScrollView>
      </ScreenWrapper>
      :
      <NoEntriesYet />
  );
}

export default Journal;