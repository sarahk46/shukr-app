import { Text, Button, NativeBaseProvider, ChevronLeftIcon, CloseIcon, Input, Stack, View, Divider, ScrollView } from 'native-base';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';

function topBarWithBackAndEsc() {
    return(
        <View marginTop="10"
        marginBottom="10"
        flexDirection="row" alignItems="center" flexWrap="wrap">
        <Button
            left="10"
            startIcon={<ChevronLeftIcon/>}
            _icon={{color: "black"}}
            style={styles.button}
            />
            <Text left="100" alignSelf="center" fontSize="16" textAlign="center">March 14, 2022</Text>
            <Button
            left="175"
            startIcon={<CloseIcon/>}
            _icon={{color: "black"}}
            style={styles.button}
            />
        </View>

    );
}

function WriteEntryQ3({ navigation }) {
  return (
    <ScreenWrapper>
        {topBarWithBackAndEsc()}
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