import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import * as Linking from 'expo-linking';

const Link = () => {
   //Abrir un enlace hacia una pagina web 
    const handlePress = () =>{
        Linking.openURL('https://expo.io');
      }

   //Abrir para Llamar mediante el componente nativo del movil
    const handleCallPress = async () => {
        await Linking.openURL("tel:+5355720195")     
      }
   //Abrir para enviar un sms mediante el componente nativo del movil
      const handleSMSPress = async () => {
        if(Platform.OS == 'ios')
           Linking.openURL("sms:+5355720195&body=Mensaje de texto predefinido")
        else
           Linking.openURL("sms:+5355720195?body=Mensaje de texto predefinido")
      }
  //Abrir para seleccionar una app nativa para enviar correo
      const handleEmailPress = async () => {
        if(Platform.OS == 'ios')
           Linking.openURL("mailto:ossany.insua1982@gmail.com&subject=Asunto predefinido&body=Mensaje de texto predefinido")
        else
        Linking.openURL("mailto:ossany.insua1982@gmail.com?subject=Asunto predefinido&body=Mensaje de texto predefinido")
      }
    //Abrir WhatsApp para enviar un sms mediante el componente nativo del movil
      const handleWhatsAppPress = async () => {
        if(Platform.OS == 'ios')
           Linking.openURL("https://wa.me/+5355720195&text=WhatsApp predefinido")
        else
           Linking.openURL("https://wa.me/+5355720195?text=WhatsApp predefinido")
      }
    return (
        <View>
            <Text onPress={handlePress}>Este es un enlace</Text>
            <Button title="llamar" onPress={handleCallPress}/>
            <Button title="SMS" onPress={handleSMSPress}/>
            <Button title="Email" onPress={handleEmailPress}/>
            <Button title="WhatsApp" onPress={handleWhatsAppPress}/>
        </View>
    )
}

export default Link
