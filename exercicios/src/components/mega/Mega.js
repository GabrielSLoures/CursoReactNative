import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import { TextInput } from 'react-native'
import { Button } from 'react-native'

export default class extends React.Component{

    state = {
        qtdNumeros: this.props.qtdNumeros || 6,
        numeros: []
    }

    gerarNumeroNaoContido = nums => {
        const novoNumero = parseInt(Math.random() * 99) + 1
        return nums.includes(novoNumero) ? this.gerarNumeroNaoContido(nums) : novoNumero
    }

    gerarNumeros = () => {
        const { qtdNumeros } = this.state
        const numeros = []

        for(let i = 0; i < qtdNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }
        this.setState({ numeros })
    }

   render() {
       return(
        <>
           <Text style={Estilo.txtStyle}>Gerador de Mega-Sena</Text>
           <TextInput 
                style={{
                    borderBottomWidth: 1,
                    marginVertical: 20
                }}
                placeholder='Quantidade de números'
                value={this.state.qtdNumeros}
                onChangeText={qtd => this.setState({qtdNumeros: +qtd || 0})}
           />
           <Button 
                title='Gerar' 
                onPress={this.gerarNumeros}
           />
           <Text style={{marginTop: 20, fontSize: 20}}>
               {this.state.numeros.join(', ')}
           </Text>
        </>
       )
   }

}