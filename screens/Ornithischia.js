import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles'; 
import { ScrollView , View , Text , Image} from 'react-native';

const turler = [
  { 
    id: '1',
    tur: 'Thyreophora', 
    aciklama: 'Zırhlı dinozorlar',
    ornek: 'Stegosaurus',
    image: require('../assets/stegosaurus.png'),
  },
  { 
    id: '2', 
    tur: 'Ornithopoda', 
    aciklama: 'Koşucu otçullar',
    ornek: 'Iguanodon',
    image: require('../assets/Iguanodon.png'),
  },
  { 
    id: '3', 
    tur: 'Marginocephalia', 
    aciklama: 'Kafasında çıkıntılar veya boynuzlar olanlar',
    ornek: 'Ceratopsia',
    image: require('../assets/Ceratopsia.png'),
  },
];


export default function Ornithischia(){
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <StatusBar style="light" />
            <Text style={styles.h2}>Ornithischia{'\n'} (Kuş Kalçalılar)</Text>
            <Text style={styles.paragraph}>Ornithischia, birçok alt gruba ayrılır. İşte en bilinen ana gruplar ve bazı örnek türler: </Text>
            <View style={styles.listContainer}>
                {turler.map(item => (
                    <View style={styles.list} key={item.id}>
                    <Text style={styles.h4}>{item.tur} : {item.aciklama}</Text>
                    <Text style={styles.listExample}>Örnek : {item.ornek}</Text>
                    <Image source={item.image} style={styles.listİmage} resizeMode="contain" />
                    </View>
                ))} 
            </View>


        </ScrollView>
    )
}
