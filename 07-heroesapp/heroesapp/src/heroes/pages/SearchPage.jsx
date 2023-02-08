import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q='' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;  

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = ( event ) => {
        event.preventDefault();
        //if(searchText.trim().lenght<=1) return;
        navigate(`?q=${searchText.toLowerCase().trim()}`);
    };

    return (
        <>
        <h1>Search Page</h1>
        <hr/>
        <div className="row">
            <div className="col-5">
                <h4>Busquedas</h4>
                <hr/>
                <form onSubmit={onSearchSubmit}>
                    <input 
                    type="text" 
                    placeholder="Busca a un heroe"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                    />
                    <button className="btn btn-outline-primary mt-1">
                        Search
                    </button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>
                {/* {
                    (q==='')
                    ? <div className="alert alert-primary">Buscar a un heroe</div>
                    : (heroes.length===0) && <div className="alert alert-danger"> Sin coincidencias entre los heroes con <b>{ q }</b></div>
                } */}
                <div className="alert alert-primary animate__animated animate__fadeIn animate__faster" 
                style={{display: showSearch ? "" : "none"}}>
                    Buscar a un heroe
                </div>
                <div className="alert alert-danger animate__animated animate__fadeIn animate__faster" 
                style={{display: showError ? "" : "none"}}>
                    Sin coincidencias entre los heroes con <b>{ q }</b>
                </div>
                {
                    heroes.map( hero => (
                        <HeroCard 
                        key={hero.id}
                        {...hero}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}
