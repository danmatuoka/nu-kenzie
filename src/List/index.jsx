import Card from "../Card";
import EmptyCard from "../EmptyCard";

import "./style.css";

const List = ({
  listTransactions,
  setListTransactions,
  filterTransactions,
  setFilterTransactions,
}) => {
  return listTransactions.length === 0 ? (
    <>
      <h3 className="titulo-empty">Você ainda não possui nenhum lançamento</h3>
      <EmptyCard />
      <EmptyCard />
      <EmptyCard />
    </>
  ) : (
    <>
      {filterTransactions.length > 0 ? (
        <>
          {filterTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              id={index}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ))}
        </>
      ) : (
        <>
          {listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              id={index}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ))}
        </>
      )}{" "}
    </>
  );
};

export default List;
