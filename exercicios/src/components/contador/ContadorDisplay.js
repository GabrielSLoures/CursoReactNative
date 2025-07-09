import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import { View } from 'react-native'

export default props => { 
   return (
        <View style={Estilo.display}>
            <Text style={Estilo.textoDisplay}>{props.numero}</Text>
        </View>
   )
}