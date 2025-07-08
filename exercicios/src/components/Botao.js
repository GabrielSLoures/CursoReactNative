import React from "react";
import { Button } from "react-native"

export default () => {

    function executar() {
        console.warn("Executando...")
    }

    return (
        <Button
            title = "Executar"
            onPress={executar}
        />
    )
    
}