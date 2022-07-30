import "./style.css";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("entrada");

  const handleSubmit = (event) => {
    event.preventDefault();

    const transacao = {
      description: descricao,
      type: tipo,
      value: tipo === "saida" ? Number(valor) * -1 : Number(valor),
    };

    setListTransactions([...listTransactions, transacao]);
  };

  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <div className="container-descricao">
        <p>Descrição</p>
        <input
          required
          id="input-descricao"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescricao(event.target.value)}
        />
        <label htmlFor="input-descricao">Ex: Compra de roupas</label>
      </div>

      <div className="container-valor">
        <section className="valor">
          <p>Valor</p>
          <input
            required
            type="number"
            onChange={(event) => setValor(event.target.value)}
          />
        </section>

        <section className="tipo">
          <p>Tipo do valor</p>
          <select
            name="entrada"
            id=""
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="entrada">entrada</option>
            <option value="saida">saída</option>
          </select>
        </section>
      </div>

      <button className="btn-form" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
