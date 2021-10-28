import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

const ContactRow = ({name, subtitle, onPress,}) =>{
    return(
        <TouchableOpacity style={styles.row} onPress={onPress}>

            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>
                <Ionicons name="person"/>
            
                </Text>
            </View>

            <View style={styles.textsContainer}>
                <View style={styles.rw}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.id}>  @{name.split(' ').reduce((prev, current) =>`${prev}${current}`, '') }</Text>
                </View>

                <Text style={styles.subtitle}>{subtitle}</Text>
                <TouchableOpacity style={styles.likeButton} onPress={() => {
                    alert("Like!")
                }}>
                    <Ionicons name="heart-outline"/>
                    
                </TouchableOpacity>
            </View>
            

            
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    rw:{
        fontSize: 16,
        color: 'gray',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 25,
        
    },
    avatar:{
        width: 36,
        height: 36,
        backgroundColor: '#00ACEE',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    avatarLabel:{
        fontSize: 16,
        fontWeight: "bold",
        color:'white',
        
    },
    textsContainer:{
        flex: 1,
        marginStart: 16,
    },
    likeButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    name: {
        fontWeight: "bold"
    },
    id:{
        fontSize:13,
        color: 'black'
    },
    subtitle: {
        marginTop: 2,
        color:'black'
    },
})

export default ContactRow;