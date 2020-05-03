const NomeContext = React.createContext('nome')

function MeuComponente1() {
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente3 />
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
    const [ telefone, setTelefone ] = React.useState('67 999998888')

    setTimeout(function() {
        setTelefone('11 888887777')
    }, 2000)

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={telefone}/>
        </div>
    )
}

function MeuComponente4(props) {
    const [ idade, setIdade ] = React.useState(28)

    setTimeout(function() {
        setIdade(29)
    }, 3000)

    return (
        <div className="componente-4">
            <p>Componente 4 - {idade} | {props.telefone}</p>
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