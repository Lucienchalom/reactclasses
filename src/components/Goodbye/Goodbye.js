import './Goodbye.css';
import { Component, createRef } from 'react';

export class Goodbye extends Component {
    constructor(props) {
        super(props)
        this.novaMensagem = ""
        this.state = {
            mensagens: [
                "you say goodbye",
                "I say goodbye",
                "we say goodbye",
            ],
            novaMensagem: "",
        }
        this.ref = createRef();
    }
    componentDidMount() {
        console.log("log")
    }
    componentDidUpdate(props, state) {
        console.log(props, state)
    }

    gerenciarInput(valor) {
        this.novaMensagem = valor;
        //     this.setState({
        //         novaMensagem:valor
        //     })
        //     console.log(valor)
    }
    adicionarMensagem() {
        const mensagens = this.state.mensagens;
        const novaMensagem = this.novaMensagem;
        const novasMensagens = [
            ...mensagens,
            novaMensagem,
        ]
        this.setState({
            mensagens: novasMensagens,
            //    novaMensagem: "",
        })
        this.ref.current.value = "";
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
                <input ref={this.ref} onChange={evento => this.gerenciarInput(evento.target.value)} type="text" /> 
                <button onClick={() => this.adicionarMensagem()}>adicionar mensagem</button>
            </div>
        )
    }
}