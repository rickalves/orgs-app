import { Text, FlatList, ScrollView, StyleSheet } from 'react-native'

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';



export default function Produtores({topo: Topo}){
    const[titulo, lista] = useProdutores();
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