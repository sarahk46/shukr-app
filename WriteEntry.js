import styles from './styles';
import { Heading, Text, Divider, Stack, Input, Button, ScrollView, Modal } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HadithCard from './HadithCard';
import ScreenWrapper from './ScreenWrapper';

function WriteEntry({ navigation }) {
  const [responseA, setResponseA] = useState('');
  const [responseB, setResponseB] = useState('');
  const [responseC, setResponseC] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmission = () => {
    // Save the submitted values to a database or store them in memory
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // button that appears after Submit to take you to View Entries page
  const handlePress = () => {
    navigation.navigate('Your Journal');
  };

  return (
    // Need to check on actual Expo Go app on iPhone
    // First display hadith box on the page
    // Second display the actual questions -- need to figure out styling in separate area
    // Maybe want a box for each question + answer too
    // Gotta also add scrollview and account for lack of button in styling
    // Consideration: Need to also scroll all the way to the bottom
    // Some issues in the text display
    <ScreenWrapper>
      <ScrollView>
        <HadithCard/>
        <Heading size="md" alignSelf="center" marginTop="4" marginBottom="2">Reflection</Heading>
        <Divider marginBottom="4" style={styles.questionDivider}/>
        <Stack direction="column" space={3}>
              <Text style={styles.questionText}>How would you describe this hadith to someone else?</Text>
              <Input width="95%"
                alignSelf="center"
                // placeholder="Question 1 Answer" 
                placeholder="Write your thoughts here!"
                multiline={true}
                style={styles.entryInput}
                value={responseA}
                onChangeText={setResponseA}
              />
              <Divider style={styles.questionDivider}/>

              <Text style={styles.questionText}>How does this hadith relate to your past and present?</Text>
              <Input width="95%"
                alignSelf="center"
                // placeholder="Question 2 Answer" 
                placeholder="Write your thoughts here!"
                multiline={true}
                style={styles.entryInput}
                value={responseB}
                onChangeText={setResponseB}
                  />
              <Divider style={styles.questionDivider}/>

              <Text style={styles.questionText}>How can you implement this hadith in your future?</Text>
              <Input width="95%"
                alignSelf="center"
                // placeholder="Question 3 Answer" 
                placeholder="Write your thoughts here!"
                multiline={true}
                style={styles.entryInput}
                value={responseC}
                onChangeText={setResponseC}
              />
              <Divider style={styles.questionDivider}/>

              <Button style={styles.button} variant="solid" _text={{color: "#3D405B"}} onPress={handleSubmission}>
              Submit
              </Button>

              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Modal.Content>
                  <Modal.CloseButton />
                  <Modal.Header>Entry submitted!</Modal.Header>
                  <Modal.Body>
                    <Button style={styles.button} variant="solid" _text={{color: "#3D405B"}} onPress={handlePress}>View Journal</Button>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
        </Stack>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default WriteEntry;