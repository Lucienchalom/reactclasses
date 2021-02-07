const Botao = ({ cor = 'blue', descricao = 'Meu Botão', onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                color: cor,
            }}
        >{descricao}</button>
    )
}

export default Botao
