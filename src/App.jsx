import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Form from "./Components/Form";
import List from "./Components/List";
import TotalMoney from "./Components/TotalMoney";
import BtnCard from "./Components/BtnCard";

import { useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState([]);

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return login === false ? (
    <div className="App-homepage">
      <div className="homepage">
        <Homepage handleLogin={handleLogin} />
      </div>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <Header handleLogout={handleLogout} />
      </header>

      <main className="container">
        <div className="container-form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="container-card">
          <BtnCard
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setFilterTransactions={setFilterTransactions}
          />
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            filterTransactions={filterTransactions}
            setFilterTransactions={setFilterTransactions}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
