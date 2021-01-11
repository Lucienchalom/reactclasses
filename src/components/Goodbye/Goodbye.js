import './Goodbye.css';
import { Component } from 'react';

export class Goodbye extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mensagens: [
                "you say goodbye",
                "I say goodbye",
                "we say goodbye",
            ],
            novaMensagem: "",
        }
    }
    gerenciarInput(valor) {
        this.setState({
            novaMensagem:valor
        })
        console.log(valor)
    }
    adicionarMensagem() {
        const mensagens = this.state.mensagens;
        const novaMensagem = this.state.novaMensagem;
        const novasMensagens = [
            ... mensagens,
            novaMensagem,
        ]
        this.setState({
            mensagens: novasMensagens,
            novaMensagem: "",
        })
        console.log("metodo foi chamado")
    }
    render() {
        return (
            <div className="goodbye">
                {
                    this.state.mensagens.map(mensagem => {
                        return <p> {mensagem} </p>
                    })
                }
                <input onChange={evento => this.gerenciarInput(evento.target.value)} type="text" />
                <button onClick={() => this.adicionarMensagem()}>adicionar mensagem</button>
            </div>
        )
    }
}