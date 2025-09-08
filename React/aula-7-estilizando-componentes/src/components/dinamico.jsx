function sum(a, b) {
  return a + b;
}

export default () => {
  const count = 'React';
  const status = true;
  return (
    <>
      <h2 style={{ color: status ? '#00ff9f' : '#f64348'      }}>
        
        It's easy, like 1 + 1 = {sum(1, 1)}
        
      </h2>
       {/* usando funções para calcular dinamicamente */}
      <h3>
        Status: {status ? 'Ativo' : 'Inativo'}
      </h3>
       {/* o jsx nao reconhece booleanos, por isso a necessidade do operador ternario ou do tipo curto circuito && */}
      <h3>
        {status && <p>O status é verdadeiro</p>}
      </h3>
    </>
  );
};