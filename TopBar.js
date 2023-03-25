import { Text, Button, ChevronLeftIcon, CloseIcon, View } from 'native-base';
import React from 'react';
import styles from './styles';

// with back and esc
function TopBar({navigation, backTo, date}) {
    return(
        // justify content disperses child objects evenly
        <View flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="5">
            <Button
                startIcon={<ChevronLeftIcon/>}
                _icon={{color: "black"}}
                style={styles.iconButton}
                onPress={() => navigation.navigate(backTo)}
            />

            <Text fontSize="16">{date}</Text>
            
            <Button
                startIcon={<CloseIcon/>}
                _icon={{color: "black"}}
                style={styles.iconButton}
                onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}

export default TopBar;