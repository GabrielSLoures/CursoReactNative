import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import If from '../renderizacaoCondicional/If'


export default ({usuario = {}}) => { 
   return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtStyle}>Usuário Logado</Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
   )
}