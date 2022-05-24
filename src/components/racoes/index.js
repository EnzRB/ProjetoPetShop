import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image, valor } from "react-native";

//Criando a função e recebendo por props o titulo valor e imagem do jogo
export default function Racoes({ data, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerRacoes}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />
            <Text style={estilo.data}>{data}</Text>

            

        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 350,
        height: 350,
    },
    data: {
        color: "black",
        fontSize: 16,
        marginLeft: 69,
        fontWeight: "bold",
    },
    images: {
        width: 250,
        height: 250,      
        borderRadius: 3,
    }

});

