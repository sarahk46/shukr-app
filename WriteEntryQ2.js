import { Text, Input, ScrollView } from 'native-base';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';

function WriteEntryQ2({ navigation }) {
  return (
    <ScreenWrapper>
        <TopBar />
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
            <Input width="95%"
                alignSelf="center"
                placeholder="Type your response here..."
                multiline={true}
                style={styles.entryInput}
            />

        <ContinueButton type="Question 2" navigation={navigation}/>
        
        </ScrollView>
    </ScreenWrapper>
);
}

export default WriteEntryQ2;