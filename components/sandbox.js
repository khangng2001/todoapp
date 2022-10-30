import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text>sandbox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#ddd',
    }
});