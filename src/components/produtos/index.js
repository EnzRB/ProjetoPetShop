import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

//Criando a função e recebendo por props o titulo valor e imagem do jogo
export default function Produtos({ valor, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
    },
    valor: {
        color: "green",
        fontSize: 14,
        marginLeft: 29,
        fontWeight: "bold",
    },
    images: {
        width: 395,
        height: 800,
        borderRadius: 3,
    }

});

