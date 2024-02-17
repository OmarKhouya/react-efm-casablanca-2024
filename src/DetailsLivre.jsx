export default function DetailsLivre({Livres}) {
  return (
    <div className="w-100 d-flex justify-content-center mt-3">
      <ul className="list-unstyled d-flex w-75 flex-wrap">
        {Livres &&
          Livres.map((p) => (
            <li className="border rounded my-2 mx-2 p-3 ">
              {p.id} - {p.name} - {p.phone}
            </li>
          ))}
      </ul>
    </div>
  );
}
 