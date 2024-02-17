import DetailsLivre from "./DetailsLivre";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [Livres, setLivres] = useState();
  const [type, setType] = useState();
  const [Panier, setPanier] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setLivres(data));
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/details-livre"
          element={<DetailsLivre Livres={Livres} />}
        />
      </Routes>
      <br />
      <div className="container">
        <div>
          <select
            onChange={(e) => setType(e.target.value)}
            className="form-control w-25"
          >
            {Livres &&
              Livres.map((l, index) => (
                <option value={l.name} key={index}>
                  {l.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h1 className="text-center">Livres du genre : {type}</h1>
          {/*question : 8.b  */}
          <table className="m-auto table w-50">
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
                Livres.filter((L) => L.name === type).map((L, index) => (
                  <tr key={index}>
                    <td>{L.name}</td>
                    <td>{L.username}</td>
                    <td>{L.email}</td>
                    <td>{L.phone}</td>
                    {/* {ISBN:L.ISBN,title:L.title,Prix:L.prix} */}
                    <td>
                      {/*question : 8.c  */}
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          setPanier((prev) => [
                            ...prev,
                            { name: L.name, id: L.id },
                          ]);
                        }}
                      >
                        Ajouter au Panier
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="">Panier : </h1>
          <ul>
            {Panier.length > 0 ? (
              Panier.map((P, index) => (
                <li key={index}>
                  {P.name} - {P.id}
                  <button
                    className="btn btn-warning mx-3 my-2"
                    onClick={() => {
                      setPanier(Panier.filter((l) => l.id !== P.id));
                    }}
                  >
                    Supprimer
                  </button>
                </li>
              ))
            ) : (
              <p className="fs-3">-Panier est vide!</p>
            )}
          </ul>
          {/*question : 8.d  */}
          <h2>
            - Total : {Panier.reduce((total, current) => (total += current.id), 0)}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
