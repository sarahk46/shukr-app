import { Text, Input, ScrollView, Button } from 'native-base';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';
import React, { useContext, useState } from 'react';
import JournalContext from './JournalContext';

function WriteEntryQ2({ navigation, route }) {
  const [response, setResponse] = useState('');

  const handleContinue = () => {
    const responses = {...route.params.responses, question2: response };
    
    navigation.navigate('Question 3', {
        responses
      });
  };

  return (
    <ScreenWrapper>
        <TopBar />
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
            <Input width="95%"
                alignSelf="center"
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

export default WriteEntryQ2;