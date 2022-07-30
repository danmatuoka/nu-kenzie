import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const soma = listTransactions.map((elem) => elem.value);

  return listTransactions.length === 0 ? (
    <></>
  ) : (
    <section className="total-money">
      <div>
        <h4>Valor total:</h4>
        <p id="valor-soma">
          {soma
            .reduce((a, b) => a + b)
            .toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <p id="footer-saldo">O valor se refere ao saldo</p>
    </section>
  );
};

export default TotalMoney;
