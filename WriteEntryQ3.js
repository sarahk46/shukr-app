import { Text, Input, ScrollView } from 'native-base';
import React from 'react';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';

function WriteEntryQ3({ navigation }) {
  return (
    <ScreenWrapper>
        <TopBar />
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
            <Input width="95%"
                alignSelf="center"
                placeholder="Type your response here..."
                multiline={true}
                style={styles.entryInput}
            />

        <ContinueButton type="Question 3" navigation={navigation}/>
        
        </ScrollView>
    </ScreenWrapper>
    );
}

export default WriteEntryQ3;