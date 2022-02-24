import React from "react";
import Nav from "../NavBar/Nav";
const Expenses = () => {
  return (
    <div className="expenses-container">
      <Nav />
      <div className="expenses-title">
        <h1>Twoje wydatki</h1>
      </div>
      <hr />
      <div className="expenses-adding">
        <div className="expenses-adding-category-list">
          <h1>Kategoria</h1>
          <select>
            <option>Dom</option>
            <option>Imprezy</option>
            <option>Jedznie</option>
            <option>Opłaty</option>
          </select>
        </div>
        <di className="expenses-adding-name-cost-and-button">
          <input type="text" placeholder="Nazwa" />
          <input type="text" placeholder="Koszt" />
          .PLN
          <button>Dodaj</button>
        </di>
      </div>
      <div className="expenses-see-how-much-spent">
        <div className="expenses-see-party-category">
          <h3>Imprezy i Wypady</h3>
          <select>
            <option>Piwo 5PLN</option>
          </select>
        </div>
        <div className="expenses-see-charges-category">
          <h3>Opłaty</h3>
          <select>
            <option>Prąd 105PLN</option>
          </select>
        </div>
        <div className="expenses-see-food-category">
          <h3>Jedzenie na mieście</h3>
          <select>
            <option>McDonald 15PLN</option>
          </select>
        </div>
        <div className="expenses-see-home-category">
          <h3>Wydatki na Dom</h3>
          <select>
            <option>Doniczka 5PLN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
