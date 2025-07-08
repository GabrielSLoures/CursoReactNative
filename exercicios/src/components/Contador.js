import React, { use, useState, Fragment } from "react";
import { Text, Button } from "react-native";

export default props => {

    const [numero, setNumero] = useState(props.inicial)

    let incremento = () => setNumero(numero + 1)
    let decremento = () => setNumero(numero - 1)

    return (
        <Fragment>
            <Text>{numero}</Text>
            <Button title="+" onPress={incremento}/>
            <Button title="-" onPress={decremento}/>
        </Fragment>
    )

}