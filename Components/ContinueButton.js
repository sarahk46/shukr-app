import { Button } from 'native-base';
import styles from '../styles';

function ContinueButton({ type, navigation }) {
  if (type != 'Question 3') {
    return (
      <Button
        style={styles.continueButton}
        _text={{ color: '#3D405B', fontSize: '24' }}
        onPress={() => {
          if (type === 'Pause') {
            navigation.navigate('Question 1');
          } else if (type === 'Question 1') {
            navigation.navigate('Question 2');
          } else if (type === 'Question 2') {
            navigation.navigate('Question 3');
          }
        }}
      >
        Continue
      </Button>
    );
  } else {
    return (
      <Button
        style={styles.continueButton}
        _text={{ color: '#3D405B', fontSize: '24' }}
        onPress={() => navigation.navigate('Your Journal')}
      >
        Submit
      </Button>
    );
  }
}

export default ContinueButton;
