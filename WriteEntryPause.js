import { Text, Button, CloseIcon, View, ScrollView } from 'native-base';
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
        <View
        flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text fontSize="16">March 14, 2022</Text>
            <Button
            startIcon={<CloseIcon/>}
            _icon={{color: "black"}}
            style={styles.iconButton}
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
                <Button style={styles.writeEntryButton} onPress={navigation.navigate('Question 1')}>
                    <Text>Continue</Text>
                </Button>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default WriteEntryPause;