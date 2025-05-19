import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles'; 
import { ScrollView , View , Text} from 'react-native';

export default function Ornithischia(){
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <StatusBar backgroundColor="#333" style="light" />
            <View>
              <Text style={styles.h2}>Ornithischia{'\n'} (Kuş Kalçalılar)</Text>
            </View>
            <Text style={styles.paragraph}>Ornithischia, birçok alt gruba ayrılır. İşte en bilinen ana gruplar ve bazı örnek türler: </Text>
        </ScrollView>
    )
}
