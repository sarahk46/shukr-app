import { Text, Button, CloseIcon, View, ScrollView, Box } from 'native-base';
import HadithCard from './HadithCard';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import getCurrentDate from './helpers'
// TODO: Figure out redirection w/ "Reflect Now" to WriteEntry page
// NavigationContainer should be a part of the solution -- read more here: 
// https://reactnavigation.org/docs/navigating
// The packages for this are installed btw here

function TopBarWithEscOnly({ navigation }) {
    const date = getCurrentDate(true);
    return (
        <View
            flexDirection="row" alignItems="center" justifyContent="space-between"
        >
            <Text fontSize="16">{date}</Text>
            <Button
                startIcon={<CloseIcon />}
                _icon={{ color: "black" }}
                style={styles.iconButton}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

function WriteEntryPause({ navigation }) {
    return (
        <ScreenWrapper>
            <TopBarWithEscOnly navigation={navigation} />

            {/* changed from ScrollView to View */}
            <View marginTop="30">
                <Text style={styles.pauseTitle}>Pause and Reflect</Text>
                <HadithCard isHomeCard={false} />
                <Text style={styles.leftText}>Once you're done reading...</Text>
                <Button
                    style={styles.continueButton}
                    onPress={() => navigation.navigate('Question 1')}>
                    <Text>Continue</Text>
                </Button>
            </View>
        </ScreenWrapper>
    );
}

export default WriteEntryPause;