import { useFetch,useCounter } from "../Hooks";
import { LoadingQuote,Quote } from './index';

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);
    const {data,isLoading,hasError} = useFetch('https://rickandmortyapi.com/api/character/'+counter);
    const { name,species,image } = !!data && data;

    return (
        <>
        <h1>Rick and Morty characters</h1>
        <hr/>
        {
            isLoading
            ? <LoadingQuote/>
            : <Quote 
            name={name} 
            species={species}
            image={image}
            />
        }
        <button className="btn btn-primary"
        onClick={ ()=>increment() }
        disabled={ isLoading }
        >
            Next character
        </button>
        </>
    )
}