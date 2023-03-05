import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native';
import Estrela from './Estrela';

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}){
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    
    const RenderEstrelas = () => {
        const listaEstrelas = []
        for(let i = 0; i < 5; i++){
            listaEstrelas.push(
                <Estrela 
                    onPress={() => setQuantidade(i + 1)}
                    preenchida={i < quantidade}
                    disabled={!editavel}
                    grande={grande}
                    key={i}
                />
            );
        }

        return listaEstrelas;
    }
    return (
        <View style={estilos.estrelas}>
            <RenderEstrelas />
        </View>    
    );
}

const estilos = StyleSheet.create({
    estrelas:{
        marginVertical:8,
        flexDirection: 'row',
    }
});