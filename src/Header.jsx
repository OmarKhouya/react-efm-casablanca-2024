import {Link} from "react-router-dom"

export default function Header(){
    return (<header>
        <h1>Bibliotheque</h1>
        <Link to={"/Acceuil"} >Acceuil</Link>
        <Link to={"/details-livre"} >Details</Link>
    </header>)
}