import React from 'react'
import { View, Text, Image, StyleSheet, Platform} from 'react-native'

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <View style={estilos.cartao}>
        <Image  style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text>{distancia}</Text>
            {/* <Text>{estrelas}</Text> */}
        </View>
    </View>
}


const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {

    const styles = {boxShadow:null}
    if (Platform.OS === 'ios') {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
    return styles.boxShadow
  };

const sombra  =  generateBoxShadowStyle(0, 2, '#000', 0.23, 2.62, 4, '#000');

const estilos = StyleSheet.create({
    cartao:{
        backgroundColor: "#F6F6F6",
        marginVertical:8,
        marginHorizontal:16,
        padding: 16,
        flexDirection:'row',
        borderRadius:6,
        ...sombra,
       
    },
    imagem:{
        width: 48,
        height: 48,
        marginRight:8,
        borderRadius:6,
        borderWidth:1,
        borderColor:"green",
    },
    informacoes:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
    },
    nome:{
        fontSize: 16,
        fontWeight:"bold",
    }

});

