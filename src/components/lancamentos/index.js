import React from 'react';
import {View,Image,TouchableOpacity,StyleSheet} from 'react-native';



export default function Lancamentos({imagem}){
return(
    
    <TouchableOpacity style={estilo.containerLancamento}>

        <Image style={estilo.images} source ={require(`../../imagens/${imagem}`)} />
        
    </TouchableOpacity>

);
}
const estilo = StyleSheet.create({

    containerLancamento:{
        borderRadius:10,
        marginTop:8,
        padding:10,
        margin:2,
        alignItems:'center',
        marginLeft:8
    },

    images:{
      width:380,
      height:400,
      borderRadius:12,      
    }
}

)