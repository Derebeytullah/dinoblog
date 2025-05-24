import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles'; 
import { ScrollView , View , Text , Image} from 'react-native';

const turler = [
  { 
    id: '1', 
    tur: 'Theropoda', 
    aciklama: 'İki ayaklı etçil avcılar',
    ornek: 'Tyrannosaurus Rex',
    image: require('../assets/t-rex.png'),  // Resim dosyasını buraya ekledim
  },
  { 
    id: '2', 
    tur: 'Sauropodomorpha', 
    aciklama: 'Uzun boyunlu dev otçullar',
    ornek: 'Brachiosaurus',
    image: require('../assets/Brachiosaurus.png'),  // Bunu da uygun dosya ile değiştir
  },
];

export default function Saurnichia(){
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <StatusBar style="light" />
            <Text style={styles.h2}>Saurnichia{'\n'} (Kertenkele  Kalçalılar)</Text>
            <Text style={styles.paragraph}>Kalça kemiği yapısı, modern kertenkelelere benzer </Text>
            <Text style={styles.paragraph}>Saurnichia, birçok alt gruba ayrılır. İşte en bilinen ana gruplar ve bazı örnek türler: </Text>
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
