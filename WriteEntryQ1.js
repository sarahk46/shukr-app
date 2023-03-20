import { Text, Input, ScrollView } from 'native-base';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';

function WriteEntryQ1({ navigation }) {
  return (
    <ScreenWrapper>
        <TopBar />
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
            <Input
                placeholder="Type your response here..."
                multiline={true}
                style={styles.entryInput}
            />

            <ContinueButton type="Question 1" navigation={navigation}/>

        
        </ScrollView>
    </ScreenWrapper>
);
}

export default WriteEntryQ1;