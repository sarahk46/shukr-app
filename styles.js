import { StyleSheet } from 'react-native';

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
    // TODO: Before we do our release, we most definitely need to figure out how to have
    // height be self-expanded
    hadithBox: {
      backgroundColor: '#F4F1DE',
      width: '95%',
      height: 325,
      borderRadius: 30,
      alignSelf: 'center',
      padding: 14,
      marginTop: 80,
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
    entryHadithBox: {
      borderRadius: 30,
      width: '95%',
      height: 300,
      alignSelf: 'center',
      padding: 14,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: '#F4F1DE',
      alignItems: 'center',
    },
    questionDivider: {
      width: '95%',
      alignSelf: "center",
      marginTop: 4,
    },
    questionText: {
      marginLeft: 10,
      marginTop: 4,
      marginBottom: 4,
    },
    entryInput: {
      width: '50%',
      alignSelf: "center",
      height: 100,
      variant: "outline",
      multiline: true,
    },
    title: {
      // fontFamily: 'Open Sans',
      // fontSize: '50xl',
      // textAlign: 'center',
      // marginBottom: 16,
      // marginTop: 20,
      fontSize: 22,
      lineHeight: 40,
      marginTop: 0,
    },
    citationText: {
      fontSize: 14,
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
    button: {
      backgroundColor: '#F2CC8F',
      // borderRadius: 4,
      // padding: 8,
      // width: '100%',
      // alignContent: 'center',
      fontSize: 20,
      marginTop: 20,
      borderRadius: 30,
    },
  });
  

export default styles;
