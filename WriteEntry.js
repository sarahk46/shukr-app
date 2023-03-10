import styles from './styles';
import { Box, Heading, Text, NativeBaseProvider, Divider, Stack, Input, Button } from 'native-base';
import { useState, useEffect } from 'react';

function WriteEntry() {
  return (
    // Need to check on actual Expo Go app on iPhone
    // First display hadith box on the page
    // TODO: Probably separate out the hadith card in its own component
    // Second display the actual questions -- need to figure out styling in separate area
    // Maybe want a box for each question + answer too
    <NativeBaseProvider>
      <Box style={styles.hadithBox}>
          <Text bold italic style={styles.title}>HADITH OF THE DAY</Text>
          <Text style={styles.hadithTextArabic}> 
  دَّثَنَا قَبِيصَةُ، حَدَّثَنَا سُفْيَانُ، عَنْ أَبِي حَازِمٍ، عَنْ سَهْلِ بْنِ سَعْدٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ " الرَّوْحَةُ وَالْغَدْوَةُ فِي سَبِيلِ اللَّهِ أَفْضَلُ مِنَ الدُّنْيَا وَمَا فِيهَا</Text>
          <Text style={styles.citationText}> (Bukhari, 2794) </Text>
          <Text style={styles.hadithTextEnglish}>Narrated Sahl bin Sa`d: The Prophet (ﷺ) said, "A single endeavor in Allah's Cause in the afternoon and in the forenoon is better than the world and whatever is in it.”</Text>
      </Box>
      <Divider />
          <Heading size="md">column</Heading>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Text>Question 1 Text</Text>
            <Input h = "100" variant="outline" placeholder="Question 1 Answer" />
            <Divider />
            <Text>Question 2 Text</Text>
            <Input variant="outline" placeholder="Question 2 Answer" />
            <Divider />
            <Text>Question 3 Text</Text>
            <Input variant="outline" placeholder="Question 3 Answer" />
            <Divider />
          </Stack>
      <Divider />

      <Button style={styles.button} variant="solid" _text={{color: "#fffff"}}>
        Reflect Now!
      </Button>

  </NativeBaseProvider>
  );
}

export default WriteEntry;