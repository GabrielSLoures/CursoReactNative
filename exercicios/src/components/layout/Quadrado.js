import React from 'react'
import { Text, View } from 'react-native'
import Estilo from '../estilo'

export default props => { 

    const lado = props.lado || 50

   return (
       <View style={{
            backgroundColor: props.cor || "#000",
            height: lado,
            width: lado,
            margin: 15
       }}/>
   )
}