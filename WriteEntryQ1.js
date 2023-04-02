import { Text, Input, ScrollView, Button } from 'native-base';
import HadithCard from './HadithCard';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';
import React, { useState } from 'react';

function WriteEntryQ1({ navigation }) {
  // iniitalize question 1 response
  const [response, setResponse] = useState('');

  const handleContinue = () => {
    const responses = {question1: response};
    navigation.navigate('Question 2', {
        responses
      });
  };

  return (
    <ScreenWrapper>
        <TopBar navigation={navigation} backTo={'Pause and Reflect'} exit={'Pause and Reflect'} date = {'March 14, 2022'}
        />
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

            <Button style={styles.continueButton} onPress={handleContinue}><Text>Continue</Text></Button>

        
        </ScrollView>
    </ScreenWrapper>
    );
}

export default WriteEntryQ1;