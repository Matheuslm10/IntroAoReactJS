const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const meuNome = 'Matheus Machado';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente4, {
    nome: meuNome
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null));
}

function MeuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente4(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 ", props.nome));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById('app'));
