import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, Image, ScrollView, StyleSheet } from 'react-native'

import { carregaProdutores } from '../../../services/carregaDados';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const produtores = carregaProdutores();
        setTitulo(produtores.titulo);
        setLista(produtores.lista);
        console.log(produtores.lista)
    }, []);

    const TopoLista = () => <Text style={estilos.topo}>{ titulo }</Text>;
  
    return <ScrollView>
        <Topo />
        <FlatList
            data={lista}
            renderItem={({item}) => <Produtor {...item}/>}
            keyExtractor={item => item.nome}
            ListHeaderComponent = {TopoLista}
        />
    </ScrollView>
}

const estilos = StyleSheet.create({
    topo:{
        fontSize: 20,
        color: "#464646",
        fontWeight:"bold",
        paddingHorizontal: 15,
        paddingVertical: 15,
    }
});