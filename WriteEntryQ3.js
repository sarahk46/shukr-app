import { Text, Input, ScrollView, Button, Modal } from 'native-base';
import HadithCard from './HadithCard';
import ContinueButton from './ContinueButton';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import TopBar from './TopBar';
import React, { useContext, useState } from 'react';
import JournalContext from './JournalContext';

function WriteEntryQ3({ navigation }) {
  const { journalEntries, setJournalEntries } = useContext(JournalContext);
  const [response, setResponse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmission = () => {
    const newEntry = {
      question2: response,
    };
    setJournalEntries([...journalEntries, newEntry]);
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
    <ScreenWrapper>
        <TopBar />
        <ScrollView>
            <HadithCard isHomeCard={false}/>
            <Text 
            style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
            <Input width="95%"
                alignSelf="center"
                placeholder="Type your response here..."
                multiline={true}
                style={styles.entryInput}
                value={response}
                onChangeText={setResponse}
            />

        <Button style={styles.writeEntryButton} onPress={handleSubmission}><Text>Submit</Text></Button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Entry submitted!</Modal.Header>
            <Modal.Body>
            <Button style={styles.button} variant="solid" _text={{color: "#3D405B"}} onPress={handlePress}>View Journal</Button>
            </Modal.Body>
        </Modal.Content>
        </Modal>
        
        </ScrollView>
    </ScreenWrapper>
    );
}

export default WriteEntryQ3;