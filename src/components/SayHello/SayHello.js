import './SayHello.css';
import {useState, useEffect} from 'react';

export const SayHello = () => {
    const [valor, setValor] = useState(0)
    useEffect( () => {
        console.log("incrementei")
        return () => {
            console.log("say hello is dead")
        };
    }, [])
    return (
        <div className="sayhello">
            <p>and i say hello {valor} times </p>
            <button onClick= {() => setValor(valor +1) }>clique me</button>
        </div>
    )
};