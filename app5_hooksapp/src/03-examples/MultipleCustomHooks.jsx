import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const url = "https://breakingbadapi.com/api/quotes/" + counter;
    const {data, isLoading} = useFetch(url);
    

    const {author, quote} = !!data ? data[0] : false;

    return (
        <>
            <h2>Breaking Bad Quotes</h2>

            {
                (isLoading) ? 
                    <LoadingQuote/>
                :
                    <Quote quote={quote} author = {author}/>
            }
            
            
            
            <button onClick={increment} className="btn btn-primary">
                Next quote
            </button>

        </>
    )
}