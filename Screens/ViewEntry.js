import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native';
import { Box, Button, ScrollView, Stack, Text, TextArea, Icon, ChevronLeftIcon, View } from 'native-base';
import JournalContext from '../JournalContext';
import HadithCard from '../Components/HadithCard';
import styles from '../styles';
import ScreenWrapper from '../ScreenWrapper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

function displayTopBar(date, isEditing) {
  if (isEditing) {
    return (
      <Text style={styles.dateTitle}>{date}</Text>
    );
  }
  return (
    <View flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="5">
      <Button
        startIcon={<ChevronLeftIcon />}
        _icon={{ color: "black" }}
        style={styles.iconButton}
        onPress={() => navigation.navigate('Your Journal')}
      />
      <Text style={styles.dateTitle}>{date}</Text>
    </View>
  );
}

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

  function EditEntry() {
    return (
    <>
        <Text fontSize="16" alignText="center">{route.params.date}</Text>
        <HadithCard isHomeCard={false} />

        <Text style={styles.questionText}>
            Understand: How would you describe this hadith to someone else?
        </Text>
        <TextInput
            value={editedEntry.question1}
            onChangeText={(text) =>
            setEditedEntry({
                ...editedEntry,
                question1: text,
            })
            }
            style={styles.viewEntryText}
            multiline={true}
        // Below is the way to add the correct background color styling,
        // But for some reason, I can't see the text of the previous response
        // style={{...styles.editEntryText, backgroundColor: '#F4F1DE', color: 'black'}}
        />

        <Text style={styles.questionText}>
            Reflect: How does this hadith relate to your past and present?
        </Text>
        <TextInput
            value={editedEntry.question2}
            onChangeText={(text) =>
            setEditedEntry({
                ...editedEntry,
                question2: text,
            })
            }
            style={styles.viewEntryText}
            multiline={true}
        />

        <Text style={styles.questionText}>
            Action: How can you implement this hadith in your future?
        </Text>
        <TextInput
            value={editedEntry.question3}
            onChangeText={(text) =>
            setEditedEntry({
                ...editedEntry,
                question3: text,
            })
            }
            style={styles.viewEntryText}
            multiline={true}
        />
        
        <Button onPress={handleSave} style={styles.button}>
            <Text color="#3D405B">Save</Text>
        </Button>
        <Button onPress={handleCancel} style={styles.button}>
            <Text color="#3D405B">Cancel</Text>
        </Button>
    </>
    );
  }

  return (
    <ScreenWrapper>
      <ScrollView>
        <Stack direction="column" space={3}>
          {isEditing ? <EditEntry />
          : (
              <>
                <View flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="5"
                  height="60">
                  <Button
                    startIcon={<ChevronLeftIcon />}
                    _icon={{ color: "black" }}
                    style={styles.iconButton}
                    onPress={() => navigation.navigate('Your Journal')}
                  />
                  <Text fontSize="16">{route.params.date}</Text>
                  {/* Hacky way of putting a third part */}
                  <View width="10" />
                </View>
                <HadithCard isHomeCard={false} />
                <Text style={styles.questionText}>Understand: How would you describe this hadith to someone else?</Text>
                <Box>
                  <Text style={styles.viewEntryText}>{editedEntry.question1}</Text>
                </Box>

                <Text style={styles.questionText}>Reflect: How does this apply to your past and present?</Text>
                <Box>
                  <Text style={styles.viewEntryText}>{editedEntry.question2}</Text>
                </Box>

                <Text style={styles.questionText}>Action: How can you implement this hadith in your future?</Text>
                <Box marginBottom="5">
                  <Text style={styles.viewEntryText}>{editedEntry.question3}</Text>
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
          _icon={{ color: "black" }}
        >
        </Button>
      }

      {/* floating Save button */}
      {/*isEditing &&
        <Button
          onPress={handleSave}
          style={[styles.iconButton, styles.floatBottomRight]}
          startIcon={<MaterialCommunityIcons name="check" size={32} color="black" />}
          _icon={{ color: "black" }}
        >
        </Button>
      */}
      {/* floating Cancel button */}
      {/*isEditing &&
        <Button
          onPress={handleCancel}
          style={[styles.iconButton, styles.floatBottomLeft]}
          startIcon={<MaterialCommunityIcons name="close" size={32} color="black" />}
          _icon={{ color: "black" }}
        >
        </Button>
      */}
    </ScreenWrapper>
  );
}

export default ViewEntry;
