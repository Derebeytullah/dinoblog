import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles'; 
import { ScrollView , View , Text , FlatList} from 'react-native';

const turler = [
    { id: '1', tur : 'Thyreophora', aciklama : 'Zırhlı dinozorlar'},
    { id: '2', tur : 'Ornithopoda', aciklama : 'Koşucu otçullar'},
    { id: '3', tur : 'Marginocephalia', aciklama : 'Kafasında çıkıntılar veya boynuzlar olanlar'},
];

export default function Ornithischia(){
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <StatusBar backgroundColor="#333" style="light" />
            <View>
              <Text style={styles.h2}>Ornithischia{'\n'} (Kuş Kalçalılar)</Text>
            </View>
            <Text style={styles.paragraph}>Ornithischia, birçok alt gruba ayrılır. İşte en bilinen ana gruplar ve bazı örnek türler: </Text>
            <FlatList data={turler} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <Text style={styles.h4}>• {item.tur}</Text>
            )} />
                
        </ScrollView>
    )
}
