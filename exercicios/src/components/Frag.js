import React, { Fragment } from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default props => (

        <Fragment>
            <Text style={Estilo.txtStyle}>{props.primeiro}</Text>
            <Text>{props.segundo}</Text>
        </Fragment>

)

