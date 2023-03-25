import { Box, ScrollView, Button, Text,Stack } from 'native-base';
import styles from './styles';
import HadithCard from './HadithCard';
import React, { useContext } from 'react';
import JournalContext from './JournalContext';

function ViewEntry({ route }) {
    const { journalEntries } = useContext(JournalContext);

    return (
      <ScrollView marginTop="10">
          {journalEntries.map((entry, index) => (
            <Stack key={index} direction="column" space={3} /* key={entry.id} */ >
              {/* <Text>{entry.date}</Text> */}
              <HadithCard isHomeCard={false}/>
              <Text style={styles.questionText}>Date: {route.params.date}</Text>
              <Text style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
              <Box style={styles.viewEntryText}>{entry.question1}</Box>

              <Text style={styles.questionText}>Reflect: How does this hadith relate to your past and present?</Text>
              <Box style={styles.viewEntryText}>{entry.question2}</Box>

              <Text style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
              <Box style={styles.viewEntryText}>{entry.question3}</Box>
            </Stack>
          ))}
      </ScrollView>
  
    );
  }
  export default ViewEntry;