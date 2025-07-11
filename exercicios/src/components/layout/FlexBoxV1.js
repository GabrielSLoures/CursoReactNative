import React from 'react'
import { View } from 'react-native'
import Estilo from '../estilo'

import Quadrado from './Quadrado'

export default props => { 
   return (
        <View style={Estilo.FlexBoxV1}>
            <Quadrado lado={20}/>
            <Quadrado cor="#f00" lado={30}/>
            <Quadrado cor="#0f0" lado={40}/>
            <Quadrado cor="#00f"/>
        </View>
   )
}