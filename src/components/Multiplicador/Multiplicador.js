import { useState } from "react"
import './Multiplicador.css';

export const Multiplicador = () => {
    const [numero, setNumero] = useState(0)
    const [resultado, setResultado] = useState(null)
    const handleONChange = (evento) => {
        const numero = evento.target.value;
        console.log(numero);
        setNumero(+numero);
    }
    return (
        <div className = "multiplicador">
            <input onChange={ handleONChange}></input>
            <button onClick={() => { setResultado(numero) }}>Multiplicar</button>

            <MultiplicarUm dados={{numero:resultado}} />
            <MultiplicarDois dados={{numero:resultado}} />

        </div>

    )
}

const MultiplicarUm = ({ dados }) => {
    const {numero} = dados
    console.log("renderizando multiplicar um");
    return (
        <p>{numero * 1}</p>
    )
}

const MultiplicarDois = ({ dados }) => {
    const {numero} = dados
    console.log("renderizando multiplicar dois");
    return (
        <p>{numero * 2}</p>
    )
}

