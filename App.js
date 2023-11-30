import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
    <ImageBackground style={{flex:1,justifyContent:'center',alignItems:'center'}} source={require('./assets/bat.jpg')}>
    <ScrollView horizontal={true}>
      <View style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,borderRadius: 100,marginVertical:20,marginBottom:60}}>
      <Image style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,borderRadius: 100,marginBottom:30}} source={require('./assets/first.jpg')}/>
      </View>
      <View style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,borderRadius: 30,marginVertical:20}}>
      <Image style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,borderRadius: 30,marginVertical:20}} source={require('./assets/second.jpg')}/>
      </View>
      <View style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,marginVertical:30,marginVertical:20}}>
      <Image style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,marginVertical:30,marginVertical:20}} source={require('./assets/3rd.jpg')}/>
      </View>
      <View style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,borderRadius: 100,marginVertical:20}}>
      <Image style = {{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:30,borderRadius: 100}} source={require('./assets/four.jpg')}/>
      </View>
    </ScrollView>
    <ScrollView>
    <View style = {{width:300,height:300,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderRadius: 30,marginLeft:10,marginTop:60}}>
    <Image style = {{width:300,height:300,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderRadius: 30,marginLeft:0,marginTop:0}} source={require('./assets/11.jpg')}/>
      </View>
      <View style = {{width:300,height:300,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderRadius: 30,marginLeft:10,marginTop:60}}>
      <Image style = {{width:300,height:300,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderRadius: 30,marginLeft:0,marginTop:0}} source={require('./assets/12.jpg')}/>
      </View>
      <View style = {{width:300,height:300,justifyContent:'flex-start',alignItems:'center',backgroundColor:'red',borderRadius: 30,marginLeft:10 , marginTop:60}}>
      <Image style = {{width:300,height:300,justifyContent:'flex-start',alignItems:'center',backgroundColor:'red',borderRadius: 30,marginLeft:0 , marginTop:0}} source={require('./assets/13.jpg')}/>
      </View>
      
    </ScrollView>
    </ImageBackground>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
