export default function DetailsLivre({Livres}) {
  return (
    <>
      <ul>
        {Livres &&
          Livres.map((p) => (
            <li>
              {p.id} - {p.name}
            </li>
          ))}
      </ul>
    </>
  );
}
