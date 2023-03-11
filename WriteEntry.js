import styles from './styles';
import { Box, Heading, Text, NativeBaseProvider, Divider, Stack, Input, Button, ScrollView } from 'native-base';
import { useState, useEffect } from 'react';

function WriteEntry() {
  return (
    // Need to check on actual Expo Go app on iPhone
    // First display hadith box on the page
    // TODO: Probably separate out the hadith card in its own component
    // Second display the actual questions -- need to figure out styling in separate area
    // Maybe want a box for each question + answer too
    // Gotta also add scrollview and account for lack of button in styling
    // TODO: Probably separate out the question parts to their own component
    // for hadithBox
    // Consideration: Need to also scroll all the way to the bottom
    // Some issues in the text display
    <NativeBaseProvider>
      <ScrollView>
        <Box style={styles.entryHadithBox}>
            <Text bold italic style={styles.title}>HADITH OF THE DAY</Text>
            <Text style={styles.hadithTextArabic}> 
    دَّثَنَا قَبِيصَةُ، حَدَّثَنَا سُفْيَانُ، عَنْ أَبِي حَازِمٍ، عَنْ سَهْلِ بْنِ سَعْدٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ " الرَّوْحَةُ وَالْغَدْوَةُ فِي سَبِيلِ اللَّهِ أَفْضَلُ مِنَ الدُّنْيَا وَمَا فِيهَا</Text>

            <Text> (Bukhari, 2794) </Text>
            <Text>Narrated Sahl bin Sa`d: The Prophet (ﷺ) said, "A single endeavor in Allah's Cause in the afternoon and in the forenoon is better than the world and whatever is in it.”</Text>
        </Box>
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
              />
              <Divider style={styles.questionDivider}/>

              <Text style={styles.questionText}>How does this hadith relate to your past and present?</Text>
              <Input width="95%"
                alignSelf="center"
                // placeholder="Question 2 Answer" 
                placeholder="Write your thoughts here!"
                multiline={true}
                style={styles.entryInput}
                 />
              <Divider style={styles.questionDivider}/>

              <Text style={styles.questionText}>How can you implement this hadith in your future?</Text>
              <Input width="95%"
                alignSelf="center"
                // placeholder="Question 3 Answer" 
                placeholder="Write your thoughts here!"
                multiline={true}
                style={styles.entryInput} />
              <Divider style={styles.questionDivider}/>

              <Button style={styles.button} variant="solid" _text={{color: "#fffff"}}>
              Submit
              </Button>
        </Stack>
      </ScrollView>

  </NativeBaseProvider>
  );
}

export default WriteEntry;