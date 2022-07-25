import "./style.css";

const BtnCard = ({
  listTransactions,
  setListTransactions,
  setFilterTransactions,
}) => {
  const handleFilter = (type) => {
    setFilterTransactions(
      listTransactions.filter((elem) => elem.type === type)
    );
  };

  return (
    <section className="header-card">
      <p>Resumo financeiro</p>

      <div className="cont-btn-header-card">
        <button onClick={() => setFilterTransactions([])} className="btn-todos">
          Todos
        </button>
        <button onClick={() => handleFilter("entrada")} className="btn-ent">
          Entradas
        </button>
        <button onClick={() => handleFilter("saida")} className="btn-ent">
          Despesas
        </button>
      </div>
    </section>
  );
};

export default BtnCard;
