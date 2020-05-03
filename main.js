const NomeContext = React.createContext('nome')

function MeuComponente1() {
    const meuNome = 'Matheus Machado'
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente4 nome={meuNome} />
            </MeuComponente2>
        </div>
    )
}

function MeuComponente2(props) {
    return (
        <div className="componente-2">
            <header>{props.children}</header>
            <footer></footer>
        </div>
    )    
}

function MeuComponente3() {
    return (
        <div className="componente-3">
            <MeuComponente4 />
        </div>
    )
}

function MeuComponente4(props) {
    return (
        <div className="componente-4">
            <p>Componente 4 {props.nome}</p>
        </div>
    )
}

function MeuComponente() {
    return (
        <div id="componentes">
            <MeuComponente1 />
        </div>
    )
}

ReactDOM.render(
    <MeuComponente />,
    document.getElementById('app')
)