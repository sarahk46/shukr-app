import { Text, Input, ScrollView, Button } from 'native-base';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';
import React, { useContext, useState } from 'react';
import JournalContext from './JournalContext';

function WriteEntryQ1({ navigation }) {
  const { journalEntries, setJournalEntries } = useContext(JournalContext);
  const [response, setResponse] = useState('');

  const handleContinue = () => {
    const newEntry = {
      question1: response,
    };
    setJournalEntries([...journalEntries, newEntry]);
    navigation.navigate('Question 2');
  };

  return (
    <ScreenWrapper>
        <TopBar />
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
            <Input
                placeholder="Type your response here..."
                multiline={true}
                style={styles.entryInput}
                value={response}
                onChangeText={setResponse}
            />

            <Button style={styles.writeEntryButton} onPress={handleContinue}><Text>Continue</Text></Button>

        
        </ScrollView>
    </ScreenWrapper>
    );
}

export default WriteEntryQ1;