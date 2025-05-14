import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,TouchableOpacity  ,ScrollView ,ImageBackground} from 'react-native';

export default function Home(){
    const navigation = useNavigation();
    return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar backgroundColor="#333" style="light" />
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
                  <Text style={styles.h4}>Ornithischia</Text>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Saurnichia', { type: 'Saurnichia' })}>
                <ImageBackground source={require('../assets/Ornithischia.jpg')} style={styles.gridİmage}  />  
                <View style={styles.overlay}>
                  <Text style={styles.h4}>Saurnichia</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    paddingTop: 50
  },
  scrollContainer:{
    backgroundColor: '#333',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50
  },
  paragraphTitle:{
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  paragraph:{
    color: '#eee',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  h2:{
    fontSize: 30,
    fontWeight:'bold',
    color: '#eee'
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eee',
    margin: 20
  },
  h4: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#eee',
    margin: 20,
    textAlign: 'center'
  },
  image: {
    width: 350,
    height: 250,
    margin: 20,
    borderRadius: 20
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  grid:{
    borderRadius: 20,
    width: 350,
    height: 550
  },
  gridCard: {
    width: '49%',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  gridİmage:{
    width: 300,
    height: 350,
  },
  overlay:{
    position : 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // yarı saydam siyah
    width:  '100%',
    height: '100%',
    flex : 1,
    justifyContent: 'center',
    textAlign: 'center'
  }
});
