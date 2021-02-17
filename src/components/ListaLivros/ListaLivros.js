import "./ListaLivros.css";

export const ListaLivros = ({ livros, fundo }) => {

    let fundoClass = "linha_par";
    if(fundo == "impar") fundoClass = "linha_impar"; 

    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>Ano</th>
                <th>Serie</th>
            </tr>
            {
                livros.map(livro => (
                    <tr className = {fundoClass}>
                        <td>{livro.nome}</td>
                        <td>{livro.ano}</td>
                        <td>{livro.serie}</td>
                    </tr>
                )
                )
            }

        </table>

    )
}