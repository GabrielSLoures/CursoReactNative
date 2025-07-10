import React from 'react'
import { Text, View } from 'react-native'
import Estilo from '../estilo'
import Produtos from '../produtos/Produtos'

export default props => { 

    const lista = Produtos.map(p => {
        return <Text key={p.id}>
            {p.id}) {p.nome} - R$ {p.preco}
        </Text>
    });

   return (
        <>
            <Text style={Estilo.txtStyle}>Lista de Produtos</Text>
            {lista}
        </>
   )
}