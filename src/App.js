import DetailsLivre from "./DetailsLivre";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [Panier, setPanier] = useState([])
  const [type, setType] = useState();
  /*question : 8.a  */
  const [Livres, setLivres] = useState();
  useEffect(() => {
    fetch("api")
      .then((res) => res.json())
      .then((data) => setLivres(data));
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/details-livre" element={<DetailsLivre Livres={Livres} />}/>
      </Routes>      
      <br />
      <div>
       {/*question : 10  */}
        <select onChange={(e) => setType(e.target.value)}>
          {Livres &&
            Livres.map((l, index) => (
              <option value={l.genre} key={index}>
                {l.genre}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        {/*question : 8.b  */}<table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Livres &&
              Livres.filter((L) => L.genre === type).map((L,index) => (
                <tr key={index}>
                  <td>{L.ISBN}</td>
                  <td>{L.Titre}</td>
                  <td>{L.Auteur}</td>
                  <td>{L.Prix}</td>{/* {ISBN:L.ISBN,title:L.title,Prix:L.prix} */}
                  <td>{/*question : 8.c  */}<button className="btn btn-success" onClick={()=>{setPanier(prev=>[...prev,{ISBN:L.ISBN,prix: L.prix,titre:L.titre}])}}>Ajouter au Panier</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        Panier
        <ul>
          {
            Panier.map((P,index)=><li key={index}>{P.titre}-{P.prix}<button className="btn btn-warning"  onClick={()=>{setPanier(Panier.filter(l=>l.ISBN!==P.ISBN))}}>Supprimer</button></li>)
          }
        </ul>
        {/*question : 8.d  */}Total : {Panier.reduce((total,current)=>total+=current.prix,0)}
      </div>
    </>
  );
}

export default App;
