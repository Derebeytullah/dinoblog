import  { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    color: '#eee',
    textAlign: 'center',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eee',
    margin: 20,
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