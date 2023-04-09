import { Text, Input, ScrollView, Button } from 'native-base';
import HadithCard from '../Components/HadithCard';
import styles from '../styles';
import ScreenWrapper from '../ScreenWrapper';
import TopBar from '../Components/TopBar';
import React, { useState } from 'react';
import getCurrentDate from '../helpers';

function WriteEntryQ2({ navigation, route }) {
  const [response, setResponse] = useState('');

  const handleContinue = () => {
    const responses = { ...route.params.responses, question2: response };
    navigation.navigate('Question 3', {
      responses,
    });
  };

  return (
    <ScreenWrapper>
      <TopBar
        navigation={navigation}
        backTo={'Question 1'}
        exit={'Pause and Reflect'}
        date={getCurrentDate(true)}
      />

      <ScrollView>
        <HadithCard isHomeCard={false} />
        <Text style={styles.questionText}>
          Reflect: How does this apply to your past and present?
        </Text>
        <Input
          width="95%"
          alignSelf="center"
          placeholder="Type your response here..."
          multiline={true}
          style={styles.entryInput}
          value={response}
          onChangeText={setResponse}
        />

        <Button style={styles.continueButton} onPress={handleContinue}>
          <Text>Continue</Text>
        </Button>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default WriteEntryQ2;
