const NomeContext = React.createContext('nome');

function MeuComponente1() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, null)));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null));
}

function MeuComponente3() {
  const [telefone, setTelefone] = React.useState('67 999998888');
  setTimeout(function () {
    setTelefone('11 888887777');
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(29);
  }, 3000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 - ", idade, " | ", props.telefone));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById('app'));
