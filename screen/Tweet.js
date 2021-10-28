import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import ContactRow from "../components/ContactRow";


const Tweet = ({navigation}) =>{
    return(
        <SafeAreaView>
            <View style={styles.serprator}/>
            <ContactRow
            name="YUSUF KELBAŞ"
            subtitle="react native öğreniyorum!"
            onPress={() => {
                
            }}
            />

            <View style={styles.serprator}/>

            <ContactRow 
            name="FATMA SEYREK"
            subtitle="deneme tweet"
            onPress={()=>{
                
              }}
            />

            <View style={styles.serprator}/>

            <ContactRow
            name="MERVE TEMELCİ"
            subtitle="deneme tweet"
            onPress={() => {
                
            }}
            />

            <View style={styles.serprator}/>

            <ContactRow
            name="TANER TEMELCİ"
            subtitle="deneme tweet"
            style={styles.contactRow}
            onPress={() => {
                
            }}
            
            />

            <View style={styles.serprator}/>

            <ContactRow
            name="FATİH YAVAN"
            subtitle="arkadaşlar sizce ben python öğrenmeye başlamışmıyımdır:))"
            style={styles.cRow}
            onPress={() => {
                
            }}
            
            />

        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    
    serprator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'black',

        
    },
})

export default Tweet;
