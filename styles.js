import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    hadithBox: {
      width: '90%',
      padding: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: {
    //   fontFamily: 'Open Sans',
      fontSize: 24,
      marginBottom: 16,
    },
    hadithTextArabic: {
    //   fontFamily: 'Amiri Quran',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 8,
    },
    hadithTextEnglish: {
    //   fontFamily: 'Open Sans',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#3f51b5',
      borderRadius: 4,
      padding: 8,
      width: '100%',
    },
    buttonText: {
      color: '#fff',
    //   fontFamily: 'Open Sans',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  

export default styles;
