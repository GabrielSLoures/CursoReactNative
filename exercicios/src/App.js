import React from "react";
import { ImageComponent, SafeAreaView } from "react-native";

//import PrimeiroComponente from "./components/Primeiro";
//import {Comp1, Comp2, Comp3} from "./components/Multi";
import Estilo from "./components/estilo"
//import MaxMin from "./components/MaxMin";
//import Aleatorio from "./components/Aleatorio";
//import Titulo from "./components/Frag";
//import Botao from "./components/Botao";
//import Contador from "./components/Contador";
//import ContadorV2 from "./components/contador/ContadorV2";
//import Diferenciar from "./components/Diferenciar";
//import ParOuImpar from "./components/ParOuImpar";
//import Familia from "./components/relacao/Familia";
//import Membro from "./components/relacao/Membro";
//import UsuarioLogado from "./components/renderizacaoCondicional/UsuarioLogado";
//import ListaProdutos from "./components/produtos/ListaProdutos";
//import ListaProdutosFlatList from "./components/produtos/ListaProdutosFlatList";
//import DigiteSeuNome from "./components/DigiteSeuNome";
//import FlexBoxV1 from "./components/layout/FlexBoxV1";
import Mega from "./components/mega/Mega";

export default () => 

(
    <SafeAreaView style={Estilo.App}>
        {/* <PrimeiroComponente/>
        <Comp1/>
        <Comp2/>
        <Comp3/>
        <MaxMin max={30} min={10}/>
        <MaxMin max={100} min={0}/>
        <Aleatorio min={1} max={10}/>
        <Aleatorio min={1} max={1000}/>
        <Titulo primeiro="Cadastro Produto" segundo="Tela de Cadastro do Produto"/> 
        <Botao/>
        <Contador inicial={0}/>
        <ContadorV2/>
        <Diferenciar/>
        <ParOuImpar num={10}/>
        <Familia>
            <Membro nome="Gabriel" sobrenome="Loures"/>
            <Membro nome="Solange" sobrenome="Alves"/>
            <Membro nome="Carlos" sobrenome="Loures"/>
        </Familia>
        <UsuarioLogado usuario={{nome: "Gabriel", email: "gabriel.loures1908@gmail.com"}}/>
        <UsuarioLogado usuario={{nome: "Gabriel"}}/>
        <UsuarioLogado usuario={{email: "gabriel.loures1908@gmail.com"}}/>
        <ListaProdutos/>
        <ListaProdutosFlatList/>
        <DigiteSeuNome/>
        <FlexBoxV1/>*/}
        <Mega/>
    </SafeAreaView>
)


