const NomeContext = React.createContext('nome')

function MeuComponente1() {
    const meuNome = 'Matheus Machado'
    return (
        React.createElement(NomeContext.Provider, { value: meuNome },
            React.createElement('div', { className: 'componente-1' },
                React.createElement(MeuComponente2)
            )
        )
    )
}

function MeuComponente2() {
    return (
        React.createElement('div', { className: 'componente-2' },
            React.createElement(MeuComponente3)
        )
    )
}

function MeuComponente3() {
    return (
        React.createElement('div', { className: 'componente-3' },
            React.createElement(MeuComponente4)
        )
    )
}

function MeuComponente4() {
    return (
        React.createElement(NomeContext.Consumer, null,
            (nomeContext) => (
                React.createElement('div', { className: 'componente-4' },
                    React.createElement('p', null, nomeContext)
                )
            )
        )
    )
}

function MeuComponente() {
    return React.createElement('div', { className: 'componentes' },
        React.createElement(MeuComponente1)
    )
}

ReactDOM.render(
    React.createElement(MeuComponente),
    document.getElementById('app')
)