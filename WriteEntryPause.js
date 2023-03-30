import { Text, Button, CloseIcon, View, ScrollView, Box } from 'native-base';
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

            {/* changed from ScrollView to View */}
            <View marginTop="50">
                <Text style={styles.pauseTitle}>Pause and Reflect</Text>
                <HadithCard isHomeCard={false}/>
                <Text style={styles.leftText}>Once you're done reading...</Text>
                <Button style={styles.writeEntryButton} onPress={() =>navigation.navigate('Question 1')}>
                    <Text>Continue</Text>
                </Button>
            </View>
        </ScreenWrapper>
    );
}

export default WriteEntryPause;