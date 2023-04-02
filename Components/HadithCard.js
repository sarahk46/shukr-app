import { Box, Text, Button, } from 'native-base';
import styles from '../styles';

function ReflectNowButton(navigation) {
    return (
        <Button style={styles.button} variant="solid" _text={{ color: "#3D405B" }}
            // If get done with this, need to see how to pass in hadith data
            onPress={() => navigation.navigate('Write an Entry', { screen: 'Pause and Reflect' })}>
            Reflect Now!
        </Button>
    );
}

// We should also probably accept a hadithInfo variable to decide what to display in terms of text
function HadithCard({ isHomeCard, navigation }) {
    return (
        <Box style={styles.hadithBox}>
            <Text bold style={styles.hadithTitle}>HADITH OF THE DAY</Text>
            <Text style={styles.hadithTextArabic}>
                دَّثَنَا قَبِيصَةُ، حَدَّثَنَا سُفْيَانُ، عَنْ أَبِي حَازِمٍ، عَنْ سَهْلِ بْنِ سَعْدٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ " الرَّوْحَةُ وَالْغَدْوَةُ فِي سَبِيلِ اللَّهِ أَفْضَلُ مِنَ الدُّنْيَا وَمَا فِيهَا</Text>

            <Text style={styles.hadithTextEnglish}>Narrated Sahl bin Sa`d: The Prophet (ﷺ) said, "A single endeavor in Allah's Cause in the afternoon and in the forenoon is better than the world and whatever is in it.”</Text>
            <Text style={styles.citationText}> (Bukhari, 2794) </Text>
            {isHomeCard && <ReflectNowButton navigation={navigation}/>}
        </Box>
    );
}
export default HadithCard;