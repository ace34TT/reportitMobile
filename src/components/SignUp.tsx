 // Components/FilmDetail.js

 import React from 'react';
 import { Avatar, Card, Title, Paragraph,RadioButton } from 'react-native-paper';
 import { StyleSheet, View, SafeAreaView, TextInput, Button,Text } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import IconSignUp from 'react-native-vector-icons/Ionicons';
 import Mail from 'react-native-vector-icons/Entypo';
 import IconDate from 'react-native-vector-icons/Fontisto';
 
 
 
 class SignUp extends React.Component {
 
   _inscription = () => {
     console.log('_inscription ');
   };
   
 
   render() {
    
     return (
     <View>
     
   
       <Card style={styles.main_container}>
           <Card.Content>
             <View style={[styles.searchSection,styles.title]}>
                 <IconSignUp style={styles.searchIcon} name="person-add" size={40} color="#000"/>
                 <Text ><h1>Sign up  </h1></Text>
             </View>
             <View style={styles.searchSection}>
                 <Icon style={styles.searchIcon} name="user" size={25} color="#000"/>
                 <TextInput style={[styles.input,{marginLeft:12}]} placeholder="name" />
                 <TextInput style={styles.input} placeholder="firstname" />
             </View>
             <View style={styles.searchSection}>
                 <IconDate style={styles.searchIcon} name="date" size={25} color="#000"/>
                 <TextInput style={styles.input} placeholder="Birthday" />
             </View>
             <View style={styles.searchSection}>
                 <Mail style={styles.searchIcon} name="mail" size={25} color="#000"/>
                 <TextInput style={styles.input} placeholder="mail" />
             </View>
             <View style={styles.searchSection}>
                 <Mail style={styles.searchIcon} name="key" size={25} color="#000"/>
                 <TextInput style={styles.input} placeholder="password" />
             </View>
             <View style={[styles.searchSection]}>
                 <Icon style={styles.searchIcon} name="phone" size={25} color="#000"/>
                 <TextInput style={[styles.input,{marginLeft:10}]} placeholder="phone"/>
             </View>
             <View style={styles.sexe}>
                 <Icon style={styles.searchIcon} name="intersex" size={25} color="#000"/>
                 <label>Men</label>
                 <input type="radio" name="sexe"/>
                 <label>women</label>
                 <input  type="radio" name="sexe"/>
             </View>
             <View style={styles.searchSection}>
                 <Icon style={styles.searchIcon} name="map-marker" size={25} color="#000"/>
                 <TextInput style={[styles.input,{marginLeft:13}]} placeholder="country" />
             </View>    
             <View style={styles.button}>
               <Button title="Sign In" color="grey"   />
             </View>
           </Card.Content>
         </Card>
      </View>
     );
   }
 }
 const styles = StyleSheet.create({
   title:{
     alignItems:'center',
     fontFamily: 'Consolas',
     color : 'blue',
     marginTop:15,
     marginBottom:25
   },
   main_container: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 2)',
     opacity: .7,
     
 },	
   searchSection: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff',
 },
 sexe: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'start',
   alignItems: 'center',
   backgroundColor: '#fff',
 },
 searchIcon: {
     padding: 10,
 },
 
 button:{
   flex: 1,
   marginTop:20,
   borderColor: '#000000',
 },
 input: {
   flex: 1,
   marginLeft: 5,
   marginRight: 5,
   marginTop:10,
   marginBottom:10,
   height: 50,
   borderColor: '#000000',
   borderWidth: 1,
   paddingLeft: 5,
 },
   loading_container: {
       position: 'absolute',
       left: 0,
       right: 0,
       top: 100,
       bottom: 0,
       alignItems: 'center',
       justifyContent: 'center'
   },
   myRadio: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   dropdown : {
     flex            : 1,
     backgroundColor : "#fff",
     alignItems      : "center",
     justifyContent  : "center",
 },
 
 })
 
 export default SignUp;
 