import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import Produtos from '../produtos/Produtos'

export default props => { 

    const produtoRender = ({item}) => {
               return <Text>{item.id}) {item.nome} - R$ {item.preco}</Text>
           }

   return (
    <>
       <Text style={Estilo.txtStyle}>Lista de Produtos com FlatList</Text>
           <FlatList
           data= {Produtos}
           keyExtractor={key => `${key.id}`}
           renderItem={produtoRender}
        />
    </>
   )
}