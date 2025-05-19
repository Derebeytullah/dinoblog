import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles';
import { ScrollView , StyleSheet , View} from 'react-native';
export default function Ornithischia(){
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <StatusBar backgroundColor="#333" style="light" />
        </ScrollView>
    )
}


