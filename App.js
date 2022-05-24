
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Botao from "./src/components/botao";
import Lancamento from "./src/components/lancamentos";
import Produto from "./src/components/produtos";
import Racoes from "./src/components/racoes";
import DadosLancamento from "./dados/breve.js";
import DadosProdutos from "./dados/produtos";
import DadosRacoes from "./dados/racoes.js";
import Cabecalho from "./src/components/cabecalho";
import React from 'react';


export default function App() {
  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
      <Cabecalho></Cabecalho>
      <center>
      <Image
        style={{width:'100%', height:550}}
        source = {require('./src/imagens/banner.png')}
      />
      </center>

     <View>
     <Text style={{fontWeight:'bold',fontSize: 26, marginTop: 52, marginLeft: 20 }}> PRINCIPAIS PRODUTOS </Text>
       <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DadosLancamento}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Lancamento
                imagem={item.imagem}
              />    
       )}
       />
     </View>
     <View>
     <Text style={{fontWeight:'bold',fontSize: 26, marginTop: 52, marginLeft: 20 }}> COMPRE POR CATEGORIA</Text>
       <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DadosRacoes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Racoes
                imagem={item.imagem}
                data={item.data}
                titulo={item.titulo}

              />    
       )}
       />
     </View>
     <View>
     <Text style={{fontWeight:'bold',fontSize: 26, marginTop: 52, marginLeft: 20 }}> SERVIÇOS DE BANHO E TOSA </Text>
       <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DadosProdutos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Produto
                imagem={item.imagem}
                data={item.data}
              />    
       )}
       />
     </View>
     </View>    
  );
}
