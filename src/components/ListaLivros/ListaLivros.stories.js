import { ListaLivros } from "./ListaLivros";

const livros = [
    {
        nome:"Ladrão de raios",
        ano: 2005,
        serie: "Os olimpianos"
    },
    {
        nome:"Mar de monstros",
        ano: 2006,
        serie: "Os olimpianos"
    },
    {
        nome:"A maldição do titã",
        ano: 2007,
        serie: "Os olimpianos"
    },
    {
        nome:"A batalha do labirinto",
        ano: 2008,
        serie: "Os olimpianos"
    },
    {
        nome:"O ultimo olimpiano",
        ano: 2009,
        serie: "Os olimpianos"
    }
]

export default {
    title: "Lista de Livros",
    component: ListaLivros,
}

export const Normal = () => {
    return (<ListaLivros livros = {livros}/>)
}

export const FundoImpar = () => {
    return (<ListaLivros livros = {livros} fundo = "impar"/>)
}