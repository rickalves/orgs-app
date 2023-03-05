import React, { useMemo, useReducer, useState } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, Platform } from 'react-native'
import Estrelas from '../../../components/Estrelas';


const distanciaEmMetros = (distancia) => {
  return `${distancia}m`;
}
export default function Produtor({ nome, imagem, distancia, estrelas }) {
  const [selecionado, inverteSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
  );

  const distanciaEmTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]
  );

  return <TouchableOpacity
    style={estilos.cartao}
    onPress={inverteSelecionado}
  >
    <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
    <View style={estilos.informacoes}>
      <View>
        <Text style={estilos.nome}>{nome}</Text>
        <Estrelas
          quantidade={estrelas}
          editavel={selecionado}
          grande={selecionado}
        />
      </View>
      <Text>{distanciaEmTexto}</Text>
    </View>
  </TouchableOpacity>
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

  const styles = { boxShadow: null }
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
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

const sombra = generateBoxShadowStyle(0, 2, '#000', 0.23, 2.62, 4, '#000');

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: "#F6F6F6",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 6,
    ...sombra,

  },
  imagem: {
    width: 48,
    height: 48,
    marginRight: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "green",
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  }

});

