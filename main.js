const NomeContext = React.createContext('nome')

function MeuComponente1(props) {
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente3 onClickIncrementar={props.onClickIncrementar}/>
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

function MeuComponente3(props) {
    const [ telefone, setTelefone ] = React.useState('67 999998888')

    setTimeout(function() {
        setTelefone('11 888887777')
    }, 2000)

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar}/>
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
            <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
        </div>
    )
}

function MeuComponente(props) {
    return (
        <div id="componentes">
            <MeuComponente1 onClickIncrementar={props.onClickIncrementar}/>
        </div>
    )
}

function MeuComponenteIrmao(props) {
    return (
        <div id="componente-irmao">
            <MeuComponenteIrmao2 contador={props.count} />
        </div>
    )
}

function MeuComponenteIrmao2(props) {

    React.useEffect(() => {
        localStorage.setItem('contador', props.contador)
    })

    return (
        <h2>Contador: { props.contador }</h2>
    )
}


function AppComponente() {
    const [ contador, incrementaContador ] = React.useState(
        parseInt(localStorage.getItem('contador')) || 0
    )

    const clickIncrementa = function() {
        incrementaContador(contador + 1)
    }

    return (
        <React.Fragment>
            <MeuComponente onClickIncrementar={clickIncrementa}/>
            <MeuComponenteIrmao count={contador} />
        </React.Fragment>        
    )
}

ReactDOM.render(
    <AppComponente />,
    document.getElementById('app')
)