import { Text, Button, ChevronLeftIcon, CloseIcon, View } from 'native-base';
import React from 'react';
import styles from './styles';

// with back and esc
function TopBar() {
    return(
        // justify content disperses child objects evenly
        <View flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="5">
            <Button
                startIcon={<ChevronLeftIcon/>}
                _icon={{color: "black"}}
                style={styles.iconButton}
            />

            <Text fontSize="16">March 14, 2022</Text>
            
            <Button
                startIcon={<CloseIcon/>}
                _icon={{color: "black"}}
                style={styles.iconButton}
            />
        </View>

    );
}

export default TopBar;