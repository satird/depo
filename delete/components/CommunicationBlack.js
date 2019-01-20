import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
 } from 'react-native';
 import stylesH from './modulComponents/styles/MainSliderHead';














 class Communication extends Component {
   render() {
     return (
       <View style={styles.communication}>
           <View style={stylesH.heading}>
             <Text style={stylesH.headingAlone}>Способы связи</Text>
           </View>
 					<View style={styles.sliderLowLine}></View>
           <View style={styles.infoBlock}>
             <Text style={styles.infoText}>ул. Лесная, 20, с 09:00 до 22:00</Text>
           </View>
 					<View style={styles.sliderLowLine}></View>
           <View style={styles.infoBlock}>
             <Text style={styles.infoText}>8 (800) 999 88 77 / depo@mail.ru</Text>
           </View>
 					<View style={styles.sliderLowLine}></View>
           <TouchableOpacity style={styles.infoBlock}>
             <Text style={styles.infoTextLink}>depomoskva.ru</Text>
           </TouchableOpacity>
 					<View style={styles.sliderLowLine}></View>
          <View style={styles.infoBlock}>
            <TouchableOpacity style={styles.infoButton} onPress={() => this._handlePress()}>
              <Text style={styles.infoButtonLink}>Обратная связь</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.infoBlockLast}>
            <Text style={styles.infoTextSmall}>Как добраться?</Text>
          </TouchableOpacity>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   communication: {
     flex: 1,
     paddingVertical: 10,
     paddingBottom: 20,
   },
   infoBlock: {
     paddingVertical: 17,
     paddingHorizontal: 16,
     textAlign: 'center',
     alignItems: 'center',
   },
   infoBlockLast: {
     paddingVertical: 10,
     paddingHorizontal: 16,
     textAlign: 'center',
     alignItems: 'center',
   },
   infoText: {
     fontSize: 18,
     fontWeight: '400',
     color: '#f9f9f9',
   },
   infoTextSmall: {
     fontSize: 15,
     fontWeight: '400',
     color: '#f9f9f9',
   },
   infoTextLink: {
     fontSize: 18,
     fontWeight: '400',
     color: '#f9f9f9',
     textDecorationLine: 'underline',
   },
   sliderLowLine: {
     height: 1,
     marginTop: -1,
     marginHorizontal: '5%',
     backgroundColor: '#5a5a5a',
   },
   infoButton: {
     width: '100%',
     height: 50,
     borderRadius: 4,
     backgroundColor: 'transparent',
     borderWidth: 1,
     borderColor: '#5a5a5a',
     marginHorizontal: 16,
     alignItems: 'center',
     justifyContent: 'center',
   },
   infoButtonLink: {
     color: '#f9f9f9',
     fontSize: 18,
   }
 })

export default Communication;
