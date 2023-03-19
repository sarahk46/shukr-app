import { ScrollView, Button, ChevronRightIcon, Heading, Text, Pressable, Stack } from 'native-base';
import EntryItem from './EntryItem';
import styles from './styles';
import HadithCard from './HadithCard';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ViewEntry from './ViewEntry';
import ScreenWrapper from './ScreenWrapper';

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


// TODO: Before release, would need to also accept
// a list of data of all entries where for each entry, also includes
// data of answers for each question
// Renders an EntryItem for each entry
function Journal({ navigation }) {
  return (
    <ScreenWrapper>
      <ScrollView>
        {journalEntryButton("March 14, 2023")}
        {/* {journalEntryButton("March 13, 2023", navigation)} */}
        {/* {journalEntryButton("March 12, 2023")} */}
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Journal;