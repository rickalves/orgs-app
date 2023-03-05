import { useEffect, useState } from 'react'
import { carregaProdutores } from '../services/carregaDados';


const sortByNome = (a, b) =>{
    const nomeA = a.nome.toUpperCase(); // ignore upper and lowercase
    const nomeB = b.nome.toUpperCase(); // ignore upper and lowercase
    if (nomeA < nomeB) {
        return -1;
    }
    if (nomeA > nomeB) {
     return 1;
    }
    // names must be equal
    return 0;
}

const sortByDistancia = (a, b) => a.distancia - b.distancia;

export default function useProdutores(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);
    
   
    useEffect(() => {
        const produtores = carregaProdutores();
        const listaOrdenada = produtores.lista.sort(sortByDistancia);
        setTitulo(produtores.titulo);
        setLista(listaOrdenada);
    }, []);


    return [titulo, lista]
}

