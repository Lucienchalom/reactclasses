import './Hello.css';

export const Hello = () => {
    const mensagem = () => "Hello - " + Math.random();
    const tipoAlerta = 'error';
    const gerarClasseDoContainer = () => {
        if (tipoAlerta == 'error') {return 'classe_de_erro'}
    }
    return (
        <div className={gerarClasseDoContainer()}>
            <p> {mensagem()} </p>
            <p> {mensagem()} </p>
        </div>
    )
}; 