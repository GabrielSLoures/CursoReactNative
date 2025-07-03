import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";
 
export default props=> {

    const numeroAleatorio = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

    return (
       <Text style={Estilo.txtStyle}>Número aleatório entre {props.min} e {props.max}: {numeroAleatorio}</Text> 
    )

}