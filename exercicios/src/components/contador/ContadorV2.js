import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Display from './ContadorDisplay'
import Botoes from './ContadorBotoes'


export default () => { 

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

   return (
    <>
       <Text style={Estilo.txtStyle}>Contador</Text>
       <Display numero={numero}/>
       <Botoes inc={inc} dec={dec}/>
    </>
   )
}