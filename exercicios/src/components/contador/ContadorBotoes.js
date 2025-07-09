import React from 'react'
import Estilo from '../estilo'
import { Button } from 'react-native'
import { View } from 'react-native'

export default props => { 
   return (
        <View style={Estilo.formatacaoBotoes}>
            <Button
                    title="-"
                    onPress={props.dec}
            />
            <Button
                    title="+"
                    onPress={props.inc}
            />
        </View>
   )
}