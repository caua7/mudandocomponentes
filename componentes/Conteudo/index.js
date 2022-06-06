import React from 'react';
import { View, Text, Image } from 'react-native';

import Filme from '../../assets/mbappe.png';
import estilos from './estilos'; 

export default function Conteudo() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Sobre o Jogo</Text>

      <Text style={ estilos.subtitulo }>- DESENVOLVEDOR</Text>
      <Text style={ estilos.paragrafo }>Criado em 1993 pela EA Sports.</Text>
      <Text style={ estilos.paragrafo }>FIFA, também conhecido como FIFA Football ou FIFA Soccer, é uma série de videojogos de futebol, lançados anualmente pela Electronic Arts sobre a chancela EA Sports.</Text>
    
      <Text style={ estilos.subtitulo }>- CURIOSIDADE</Text>
      <Text style={ estilos.paragrafo }> Lançado em 1993, o jogo não podia usar nomes e imagens reais. Muitos atletas receberam nomes dos desenvolvedores, como "Janco Tianno", inspirado em Jan Tian, líder da equipe de produção. O sucesso foi resultado de muito esforço.</Text>
      <Image source={ Filme } style={ estilos.conteudoMagem }/>
    </View>
  )
}