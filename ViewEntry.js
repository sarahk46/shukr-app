import { Box, ScrollView, Button, Text,Stack } from 'native-base';
import styles from './styles';
import HadithCard from './HadithCard';
import React, { useContext } from 'react';
import JournalContext from './JournalContext';

function ViewEntry({ route }) {
    const { journalEntries } = useContext(JournalContext);

    return (
      <ScrollView marginTop="10">
          {journalEntries.map((entry) => (
            <Stack direction="column" space={3} /* key={entry.id} */ >
              {/* <Text>{entry.date}</Text> */}
              <Text style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
              <Text>{entry.question1}</Text>

              <Text style={styles.questionText}>Reflect: How does this hadith relate to your past and present?</Text>
              <Text>{entry.question2}</Text>

              <Text style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
              <Text>{entry.question3}</Text>
            </Stack>
          ))}



        <HadithCard isHomeCard={false}/>
        <Stack direction="column" space={3}>
            <Text style={styles.questionText}>Date: {route.params.date}</Text>

            <Text style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>

            <Box style={styles.viewEntryText}/>
              <Text style={styles.questionText}>Reflect: How does this hadith relate to your past and present?</Text>
              <Box style={styles.viewEntryText}/>
  
              <Text style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
              <Box style={styles.viewEntryText}/>
  
              <Button style={styles.button} variant="solid" _text={{color: "#3D405B"}}>
              Submit
              </Button>
        </Stack>
      </ScrollView>
  
    );
  }
  export default ViewEntry;