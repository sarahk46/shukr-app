import React, { useContext, useState } from 'react';
import { Box, Button, ScrollView, Stack, Text, TextArea, Icon, ChevronLeftIcon } from 'native-base';
import JournalContext from './JournalContext';
import HadithCard from './HadithCard';
import styles from './styles';
import ScreenWrapper from './ScreenWrapper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

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
    <ScreenWrapper>
      <ScrollView>
        <Stack direction="column" space={3}>
          <Text style={styles.dateTitle}>{route.params.date}</Text>
          <HadithCard isHomeCard={false} />
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
              <Button onPress={handleSave} style={styles.button}>
                Save
              </Button>
              <Button onPress={handleCancel} style={styles.button}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Text style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
              <Box style={styles.viewEntryText}>
                {editedEntry.question1}
              </Box>
              
              <Text style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
              <Box style={styles.viewEntryText}>
                {editedEntry.question2}
              </Box>

              <Text style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
              <Box style={styles.viewEntryText} marginBottom="5">
                {editedEntry.question3}
              </Box>
            </>
          )}
        </Stack>
      </ScrollView>

      {/* floating Edit button */}
      {!isEditing &&
        <Button
          onPress={() => setIsEditing(true)}
          style={[styles.iconButton, styles.floatBottomRight]}
          startIcon={<MaterialCommunityIcons name="pencil" size={32} color="black" />}
          _icon={{color: "black"}}
        >
        </Button>
      }
    </ScreenWrapper>
  );
}

export default ViewEntry;
