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
    hadithBox: {
      width: '95%',
      height: '48%',
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
      backgroundColor: '#fff',
      alignItems: 'center',
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
      fontSize: '12',
    },
    hadithTextArabic: {
      // fontFamily: 'Amiri Quran',
      fontSize: 16,
      // textAlign: 'center',
      marginTop: 10,
      // marginBottom: 8,
    },
    hadithTextEnglish: {
      // fontFamily: 'Open Sans',
      fontSize: 16,
      // textAlign: 'center',
      marginTop: 10,
      // marginBottom: 16,
    },
    button: {
      backgroundColor: '#B8F8BE',
      // borderRadius: 4,
      // padding: 8,
      // width: '100%',
      // alignContent: 'center',
      fontSize: 20,
      marginTop: 30,
    },
  });
  

export default styles;
