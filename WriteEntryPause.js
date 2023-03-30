import { Text, Button, CloseIcon, View, ScrollView } from 'native-base';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
// TODO: Figure out redirection w/ "Reflect Now" to WriteEntry page
// NavigationContainer should be a part of the solution -- read more here: 
// https://reactnavigation.org/docs/navigating
// The packages for this are installed btw here

function topBarWithEscOnly(navigation) {
    return(
        <View
        flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text fontSize="16">March 14, 2022</Text>
            <Button
            startIcon={<CloseIcon/>}
            _icon={{color: "black"}}
            style={styles.iconButton}
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}

function WriteEntryPause({ navigation }) {
  return(
        <ScreenWrapper>
            <View
            flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text fontSize="16">March 14, 2022</Text>
                <Button
                startIcon={<CloseIcon/>}
                _icon={{color: "black"}}
                style={styles.iconButton}
                onPress={() => navigation.navigate('Home')}
                />
            </View>

            <ScrollView>
                <Text style={styles.pauseTitle}>Pause and Reflect</Text>
                <HadithCard isHomeCard={false}/>
                <Text marginTop="10" fontSize="20" >Once you're done reading...</Text>
                <Button style={styles.writeEntryButton} onPress={() =>navigation.navigate('Question 1')}>
                    <Text>Continue</Text>
                </Button>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default WriteEntryPause;