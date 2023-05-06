import { Text, Input, ScrollView, Button, Modal } from 'native-base';
import HadithCard from '../Components/HadithCard';
import styles from '../styles';
import ScreenWrapper from '../ScreenWrapper';
import TopBar from '../Components/TopBar';
import React, { useContext, useState } from 'react';
import JournalContext from '../JournalContext';
import getCurrentDate from '../helpers'

function WriteEntryQ3({ navigation, route }) {
  const { journalEntries, setJournalEntries } = useContext(JournalContext);
  const [response, setResponse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmission = () => {
    const entry = { ...route.params.responses, question3: response, date: getCurrentDate() };
    setJournalEntries([...journalEntries, entry]);
    setIsModalOpen(true);
    // comment
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // button that appears after Submit to take you to View Entries page
  const handlePress = () => {
    navigation.navigate('Your Journal', { screen: 'Journal' });
    setIsModalOpen(false);
  };

  return (
    <ScreenWrapper>
      <TopBar navigation={navigation} backTo={'Question 2'} exit={'Pause and Reflect'} date={getCurrentDate(true)}
      />
      <ScrollView>
        <HadithCard isHomeCard={false} />
        <Text style={styles.questionText}>
          Action: How can you implement this hadith in your future?
        </Text>
        
        <Input width="95%"
          alignSelf="center"
          placeholder="Type your response here..."
          multiline={true}
          style={styles.entryInput}
          value={response}
          onChangeText={setResponse}
        />

        <Button style={styles.continueButton} onPress={handleSubmission}><Text>Submit</Text></Button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Entry submitted!</Modal.Header>
            <Modal.Body>
              <Button style={styles.button} variant="solid" _text={{ color: "#3D405B" }} onPress={handlePress}>View Journal</Button>
            </Modal.Body>
          </Modal.Content>
        </Modal>

      </ScrollView>
    </ScreenWrapper>
  );
}

export default WriteEntryQ3;