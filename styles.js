import { StyleSheet } from 'react-native';

import * as Font from 'expo-font';

// Load the font asynchronously
async function loadFonts() {
  await Font.loadAsync({
    'Open Sans': require('./assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
  });
}

// loadFonts();

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   backgroundColor: '#fff',
    // },
    box: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      maxHeight: 200,
      borderColor: "coolGray.200",
    },
    hadithBox: {
      backgroundColor: '#F4F1DE',
      borderRadius: 30,
      alignSelf: 'center',
      paddingVertical: 20,
      paddingHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      alignItems: 'center',
    },

    questionDivider: {
      width: '95%',
      alignSelf: "center",
      marginTop: 4,
    },
    questionText: {
      marginLeft: 10,
      marginTop: 26,
      marginBottom: 30,
      fontSize: 16,
      textAlign: "center",
      marginLeft: 20,
      marginRight: 20
    },
    entryInput: {
      width: 200,
      alignSelf: "center",
      minHeight: 150,
      variant: "outline",
      multiline: true,
      backgroundColor: "#F4F1DE",
      fontSize: 18,
      color: "#A3A3A3",
    },
    viewEntryText: {
      minHeight: 150,
      variant: "outline",
      multiline: true,
      backgroundColor: "#F4F1DE",
      fontSize: 18,
      color: "#A3A3A3",
    },

    // Text
    hadithTitle: {
      marginBottom: 10,
      marginTop: 10,
      fontSize: 22,
    },
    title: {
      // fontFamily: 'Open Sans',
      // fontSize: '50xl',
      // textAlign: 'center',
      marginBottom: 10,
      marginTop: 10,
      fontSize: 22,
      marginLeft: 10,
    },
    pauseTitle: {
      // fontFamily: 'Open Sans',
      marginBottom: 30,
      fontSize: 30,
      paddingTop: 20,
      textAlign: 'center',
    },
    leftText: {
      fontSize: 20,
      marginTop: 60,
      marginLeft: 5,
      marginBottom: 10,
      textAlign: 'center',
    },
    hadithTextArabic: {
      // fontFamily: 'Amiri Quran',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
      // marginBottom: 8,
    },
    hadithTextEnglish: {
      // fontFamily: 'Open Sans',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
      // marginBottom: 16,
    },
    citationText: {
      fontSize: 14,
      textAlign: 'center',
      marginTop: 5,
    },
    dateTitle: {
      // fontFamily: 'Open Sans',
      // fontSize: '50xl',
      // textAlign: 'center',
      marginBottom: 20,
      marginLeft: 10,
      fontSize: 22,
    },
    
    // Buttons
    button: {
      backgroundColor: '#F2CC8F',
      // borderRadius: 4,
      // padding: 8,
      // width: '100%',
      // alignContent: 'center',
      fontSize: 20,
      marginTop: 20,
      borderRadius: 30,
      textDecorationColor: '#3D405B',
    },
    iconButton: {
      backgroundColor: '#F2CC8F',
      fontSize: 20,
      borderRadius: 30,
      textDecorationColor: '#3D405B',
    },
    writeEntryButton: {
      marginTop: 4,
      backgroundColor: '#F2CC8F',
      variant: "solid",
      textDecorationColor: '#3D405B',
      borderRadius: 30
    },
    journalEntryButton: {
      backgroundColor: '#F4F1DE',
      borderRadius: 30,
      // marginTop: 80,
      marginBottom: 10,
      height: 50,
      marginLeft: 12,
      marginRight: 12,
      flexDirection: "row",
      alignItems: "center",
      // flex: "2",
      justifyContent: "space-between",
    },

    floatBottomRight: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    }
  });
  

export default styles;
