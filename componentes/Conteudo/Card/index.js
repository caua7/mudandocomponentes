import React from 'react';
import { View, Text, Image } from 'react-native';

import Foto from '../../../assets/mbappe.png'
import estilos from '../Card/estilos'

export default function Card() {
    return (
        <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
          <Image source={ Foto } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>FIFA 22</Text>
          <Text style={ estilos.cardParagrafo }>Jogo Futebolístico</Text>
        </View>
        </View>
    )
};