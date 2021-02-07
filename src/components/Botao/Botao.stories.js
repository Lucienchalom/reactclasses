import Botao from "./Botao";
import { action } from "@storybook/addon-actions";
export default {
    title:"Botão",
    component: Botao,
}

export const Normal = () => {
    return (
        <Botao onClick = {action("onClick")} />
    )
}

export const Vermelho = () =>{
    return (
        <Botao cor='red' />
    )
}