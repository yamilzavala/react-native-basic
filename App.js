import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, 
         Text, 
         View, 
         TextInput, 
         Button, 
         ScrollView, 
         Dimensions, 
         FlatList, 
         SectionList, 
         ActivityIndicator,
         Image,
         Modal,
         Alert
        } from 'react-native';
        

// const fakeData = [
//   {key: '1', name: 'Item 1'},
//   {key: '2', name: 'Item 2'},
//   {key: '3', name: 'Item 3'},
//   {key: '4', name: 'Item 4'},
//   {key: '5', name: 'Item 5'},
//   {key: '6', name: 'Item 6'},
//   {key: '7', name: 'Item 7'},
//   {key: '8', name: 'Item 8'},
//   {key: '9', name: 'Item 9'},
//   {key: '10', name: 'Item 10'},
//   {key: '11', name: 'Item 11'},
// ]

// const showDialog = () => Alert.alert(
//   'Title Dialog',
//   'Content Dialog', 
//   [
//     {
//       text: 'Cancel',
//       style: 'cancel',
//       onPress: () => {}
//     },
//     {
//       text: 'Accept',
//       onPress: () => console.log('You pushed me')
//     }
//   ]
// );


export default function App() {
  const [locationValue, setLocation] = useState();
  // const [showModal, setShowModal] = useState(false);
  // const [text, setText] = useState(''); 
  // const [users, setUsers] = useState([]); 
  // const [loading, setLoading] = useState(true); 

  const searchLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      return Alert.alert('You don´t allow to access the location')
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location.coords);
    //return Alert.alert('Current position is: ' + JSON.stringify(locationValue))
  }

  useEffect(() => {
    searchLocation()
  }, []) 

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => {
  //     setUsers(data);
  //     setLoading(false)
  //   })
  // },[]);

  // if(loading) {
  //   return <View style={styles.center}> 
  //             <Text>Loading...</Text> 
  //         </View>
  // }

  return (
    <View style={styles.container}>

      <MapView style={styles.maps}>        
        {locationValue.coords 
        ? <Marker 
            title="Title marker"
            description="Description marker"
            coordinate={locationValue.coords}/> 
        : null}
      </MapView>

     {/* <Button title="Show Dialog" onPress={showDialog}/> */}

      {/* <Modal
        animationType='fade'
        transparent={true}
        visible={showModal}
      >
        <View style={styles.center}>
          <View style={styles.modalStyle}>
            <Text>Modal content</Text>
            <Button title="Hide modal" onPress={() => setShowModal(!showModal)} />
          </View>
        </View>
      </Modal>

      <Button title="Show modal" onPress={() => setShowModal(!showModal)} /> */}


      {/* <Image 
        source={{uri:'http://placekitten.com/g/200/300'}}
        style={styles.imageStyle}
      /> */}

      {/* <ActivityIndicator size='large' color='#0000ff' /> */}

      {/* <FlatList 
        data={users}
        renderItem={({item}) => <Text style={styles.flatList}>{item.name}</Text>}
        keyExtractor={item => String(item.id)}
      /> */}

      {/* <SectionList 
        sections={
          [
            {
              title: 'Grupo 1', data: fakeData.slice(0, 3)
            },
            {
              title: 'Grupo 2', data: fakeData.slice(3, 6)
            },
            {
              title: 'Grupo 3', data: fakeData.slice(6, 9)
            },
            {
              title: 'Grupo 4', data: fakeData.slice(9)
            }
          ]
        }
        renderItem={({item}) => <Text style={styles.flatList}>{item.name}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionList}>{section.title}</Text>}
      /> */}

      {/* <ScrollView style={styles.scrollView}> */}
        {/* <FlatList          
          data={fakeData}
          renderItem={({item}) => <Text style={styles.flatList}>{item.name}</Text>}
        />

        <Text> Texto: {text} </Text>
        
        <TextInput 
          style={styles.inputStyle}
          defaultValue={text}
          placeholder='Enter a value'
          onChangeText={e => setText(e)}
        />

        <Button
          title='Enviar'
          onPress={() => {
            setText(text)
            alert('Text send successfuly')
          }}/>

        <StatusBar style="auto" /> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  maps: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height,
  },
  modalStyle: {
    alignItems: 'center',
    justifyContent:'center',
    height: 300,
    width: 300, 
    backgroundColor: '#ccc',
    borderRadius: 10
  },
  imageStyle: {
    width:200,
    height:300,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: { 
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: '2%'
  },
  scrollView: {
    width: Dimensions.get('window').width
  },
  flatList: { 
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10, 
    fontSize: 22,
    height: 50
  },
  sectionList: {
    fontWeight: 'bold',
    backgroundColor: '#eee'
  }
});
