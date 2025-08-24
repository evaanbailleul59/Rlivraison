import React, { useState } from "react";
import { produits } from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((sum,p)=>sum+p.prix,0);

  const categories = ["Softs","Énergisants","Sandwichs","Snacks","Alcool"];

  return (
    <div style={{padding:20, fontFamily:"sans-serif"}}>
      <h1>🚚 Livraison Épicerie</h1>
      {!ageConfirmed && <div style={{border:"1px solid red", padding:10, marginBottom:10}}>
        <p>Vous devez avoir 18 ans pour voir l'alcool.</p>
        <button onClick={()=>setAgeConfirmed(true)}>J'ai 18 ans</button>
      </div>}
      {categories.map(cat => (cat
