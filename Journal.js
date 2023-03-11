import { NativeBaseProvider, ScrollView } from 'native-base';
import EntryItem from './EntryItem';

// TODO: Before release, would need to also accept
// a list of data of all entries where for each entry, also includes
// data of answers for each question
// Renders an EntryItem for each entry
function Journal() {
  return (
    <NativeBaseProvider>
          <ScrollView>
            <EntryItem title="Entry 1" hadith="Hadith Info" />
            <EntryItem title="Entry 2" hadith="Hadith Info" />
            <EntryItem title="Entry 3" hadith="Hadith Info" />
          </ScrollView>
    </NativeBaseProvider>

  );
}

export default Journal;