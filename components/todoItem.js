import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
            <Text style= {styles.itemText}>{item.text}</Text>
            <MaterialIcons name='delete' size={20} color='black'/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        margin: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft: 10,
    }
})