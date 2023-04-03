import { Text, Button, ChevronLeftIcon, CloseIcon, View } from 'native-base';
import React from 'react';
import styles from '../styles';

// with back and esc
function TopBar({ navigation, backTo, exit, date }) {
    return (
        <View style={styles.topBar}>
            <Button
                startIcon={<ChevronLeftIcon />}
                _icon={{ color: "black" }}
                style={styles.iconButton}
                onPress={() => navigation.navigate(backTo)}
            />

            <Text fontSize="16">{date}</Text>

            <Button
                startIcon={<CloseIcon />}
                _icon={{ color: "black" }}
                style={styles.iconButton}
                onPress={() => navigation.navigate(exit)}
            />
        </View>
    );
}

export default TopBar;