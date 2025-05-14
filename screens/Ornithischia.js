import { StatusBar } from 'expo-status-bar';
import { ScrollView , StyleSheet , View} from 'react-native';
export default function Ornithischia(){
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <StatusBar backgroundColor="#333" style="light" />
        </ScrollView>
    )
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
  }
});
