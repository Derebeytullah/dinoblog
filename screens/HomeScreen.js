import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles'; 
import { Text, View ,Image ,TouchableOpacity  ,ScrollView ,ImageBackground} from 'react-native';

export default function Home(){
    const navigation = useNavigation();
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <StatusBar style="light" />
          <Text style={styles.h2}>DinoBlog</Text>
          <Image source={require('../assets/tyrannosaurus-rex-wild.jpg')} style={styles.image}  />
          <Text style={styles.paragraphTitle}>Dinoblog'a hoşgeldiniz</Text>
          <Text style={styles.paragraph}>DinoBlog, tarih öncesi devlerin izlerini sürerek, dünyanın en ilginç dinozor türleri hakkında bilgiler sunuyor. Bu blogda, T-Rex, Triceratops, Velociraptor ve daha birçok prehistorik canlı hakkında detaylı yazılar, resimler ve eğlenceli içerikler bulacaksınız. </Text>
          <View>
              <Text style={styles.h3}>Dinozorlar 2 Ana Kategoriye Ayrılır </Text>
              <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Ornithischia', { type: 'Ornithischia' })}>
                  <ImageBackground source={require('../assets/Ornithischia.jpg')} style={styles.gridİmage} />
                  <View style={styles.overlay}>
                    <Text style={styles.h3}>Ornithischia</Text>
                  </View>
                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Saurnichia', { type: 'Saurnichia' })}>
                  <ImageBackground source={require('../assets/velociraptor.jpg')} style={styles.gridİmage}  />  
                  <View style={styles.overlay}>
                    <Text style={styles.h3}>Saurnichia</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
      </ScrollView>
    );
}   

