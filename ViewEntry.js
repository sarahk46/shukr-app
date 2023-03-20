import { NativeBaseProvider, Box, ScrollView, Button, Text,Stack } from 'native-base';
import styles from './styles';
import HadithCard from './HadithCard';

// TODO: Need to accept info for displaying to the user
function ViewEntry({ route }) {
  // const route = useRoute();
    return (
      <NativeBaseProvider>
      <ScrollView marginTop="10">
        <HadithCard isHomeCard={false}/>
        <Stack direction="column" space={3}>
    <Text style={styles.questionText}>Date: {route.params.date}</Text>

            <Text 
            style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
            <Box style={styles.viewEntryText}/>
  
              <Text style={styles.questionText}>Reflect: How does this hadith relate to your past and present?</Text>
              <Box style={styles.viewEntryText}/>
  
              <Text style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
              <Box style={styles.viewEntryText}/>
  
              <Button style={styles.button} variant="solid" _text={{color: "#3D405B"}}>
              Submit
              </Button>
        </Stack>
      </ScrollView>
  
  </NativeBaseProvider>
  
    );
  }
  export default ViewEntry;