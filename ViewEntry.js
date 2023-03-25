import React, { useContext, useState } from 'react';
import { Box, Button, ScrollView, Stack, Text, TextArea } from 'native-base';
import JournalContext from './JournalContext';
import HadithCard from './HadithCard';
import styles from './styles';

function ViewEntry({ route, navigation }) {
  const { journalEntries, setJournalEntries } = useContext(JournalContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(route.params.entry);
  const [originalEntry, setOriginalEntry] = useState(route.params.entry);

  const handleSave = () => {
    setJournalEntries(
      journalEntries.map((entry) =>
        entry.id === editedEntry.id ? editedEntry : entry
      )
    );
    setOriginalEntry(editedEntry);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedEntry(originalEntry);
    setIsEditing(false);
  };

  return (
    <ScrollView marginTop="10">
      <Stack direction="column" space={3}>
        <HadithCard isHomeCard={false} />
        <Text style={styles.questionText}>Date: {route.params.date}</Text>
        {isEditing ? (
          <>
            <Text style={styles.questionText}>
              Understand: How would you describe this hadith to someone else?
            </Text>
            <TextArea
              value={editedEntry.question1}
              onChangeText={(text) =>
                setEditedEntry({
                  ...editedEntry,
                  question1: text,
                })
              }
              style={styles.editEntryText}
            />
            <Text style={styles.questionText}>
              Reflect: How does this hadith relate to your past and present?
            </Text>
            <TextArea
              value={editedEntry.question2}
              onChangeText={(text) =>
                setEditedEntry({
                  ...editedEntry,
                  question2: text,
                })
              }
              style={styles.editEntryText}
            />
            <Text style={styles.questionText}>
              Action: How can you implement this hadith in your future?
            </Text>
            <TextArea
              value={editedEntry.question3}
              onChangeText={(text) =>
                setEditedEntry({
                  ...editedEntry,
                  question3: text,
                })
              }
              style={styles.editEntryText}
            />
            <Button onPress={handleSave} style={styles.saveButton}>
              Save
            </Button>
            <Button onPress={handleCancel} style={styles.cancelButton}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Box style={styles.viewEntryText}>
              {editedEntry.question1}
            </Box>
            <Box style={styles.viewEntryText}>
              {editedEntry.question2}
            </Box>
            <Box style={styles.viewEntryText}>
              {editedEntry.question3}
            </Box>
            <Button onPress={() => setIsEditing(true)} style={styles.button}>
              Edit
            </Button>
          </>
        )}
      </Stack>
    </ScrollView>
  );
}

export default ViewEntry;
