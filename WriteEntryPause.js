import { Text, Button, NativeBaseProvider, ChevronLeftIcon, CloseIcon, Input, Stack, View, Divider, ScrollView } from 'native-base';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
// TODO: Figure out redirection w/ "Reflect Now" to WriteEntry page
// NavigationContainer should be a part of the solution -- read more here: 
// https://reactnavigation.org/docs/navigating
// The packages for this are installed btw here



function topBarWithEscOnly() {
    return(
        <View marginTop="10"
        marginBottom="10"
        flexDirection="row" alignItems="center" flexWrap="wrap">
            <Text alignSelf="center" fontSize="16" left="150" textAlign="center">March 14, 2022</Text>
            <Button
            left="250"
            startIcon={<CloseIcon/>}
            _icon={{color: "black"}}
            style={styles.button}
            />
        </View>

    );
}


function WriteEntryPause({ navigation }) {
  return(
    <ScreenWrapper>
        {topBarWithEscOnly()}
        <ScrollView>
            
            <Text bold fontSize="30" color='grey' textAlign="center" marginBottom="10">Pause and Reflect</Text>
            <HadithCard isHomeCard={false}/>
            <Text marginTop="10" fontSize="20" textAlign="center" >Once you're done reading...</Text>
            <ContinueButton type="Pause" navigation={navigation}/>
        
        </ScrollView>


    </ScreenWrapper>
);
}

export default WriteEntryPause;