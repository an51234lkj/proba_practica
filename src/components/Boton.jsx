import { useState } from "react";

function Boton ({texto, operacion}) {
    
    let [numeroDeClicks, setNumeroDeClicks] = useState(0)

    function manexadorClick() {
        const novoNumeroDeClicks = numeroDeClicks+1
        setNumeroDeClicks(novoNumeroDeClicks)
        operacion()
    }

    return (
        <button onClick={manexadorClick}>{texto}({numeroDeClicks})</button>
    )

}

export default Boton