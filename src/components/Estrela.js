import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrela({
    onPress, 
    disabled = true, 
    preenchida, 
    grande = false
}) {
    
    const estilos = gerarEstilo(grande);

    const pegarImagem = () =>{
        if(preenchida){
            return estrela;
        }
        return estrelaCinza;
    }
    return <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
    >
        <Image source={pegarImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}

const gerarEstilo = (grande) => StyleSheet.create({
    estrela:{
        height: grande? 36 : 12,
        width: grande? 36 : 12,
        marginHorizontal:2,
    },
});