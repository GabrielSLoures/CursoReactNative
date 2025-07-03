import React from "react";
import { SafeAreaView } from "react-native";

//import PrimeiroComponente from "./components/Primeiro";
//import {Comp1, Comp2, Comp3} from "./components/Multi";
import Estilo from "./components/estilo"
//import MaxMin from "./components/MaxMin";
import Aleatorio from "./components/Aleatorio";

export default () => 

(
    <SafeAreaView style={Estilo.App}>
        {/* <PrimeiroComponente/>
        <Comp1/>
        <Comp2/>
        <Comp3/>
        <MaxMin max={30} min={10}/>
        <MaxMin max={100} min={0}/> */}
        <Aleatorio min={1} max={10}/>
        <Aleatorio min={1} max={1000}/>
    </SafeAreaView>
)


