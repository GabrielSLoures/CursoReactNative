import React from "react";
import { Text } from "react-native"
import Estilo from "./estilo"


export default props => (
    <Text style={Estilo.txtStyle}>O valor {props.max} é maior que o valor {props.min}</Text>
)