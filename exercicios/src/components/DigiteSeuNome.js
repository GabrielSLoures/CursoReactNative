import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'
import { TextInput } from 'react-native'

export default props => { 

    const [nome, setNome] = useState("")

   return (
       <View>
            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
       </View>
   )
}