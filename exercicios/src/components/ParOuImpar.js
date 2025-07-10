import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import { View } from 'react-native'

export default ({num = 0}) => { 
   return (
        <View>
            { num % 2 === 0
                ? <Text style={Estilo.txtStyle}>Par</Text>
                : <Text style={Estilo.txtStyle}>Ímpar</Text>
            }
        </View>
       
   )
}