import { useLayoutEffect,useRef,useState } from "react";

export const Quote = ({name,species,image}) => {

    const nameRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const {width,height} = nameRef.current.getBoundingClientRect();
        setBoxSize( {width,height} );
    }, [name])

    return (
        <>
        <img 
        src={image} 
        alt={name} 
        class="img-thumbnail"
        />
        <blockquote 
        className="blockquote text-end"
        style={ {display: 'flex'} }
        >
            <p 
            className="mb-1"
            ref={ nameRef }
            >
                { name }
            </p>
            <footer className="blockquote-footer"> 
                { species }
            </footer>
        </blockquote>
        <code>
            { JSON.stringify(boxSize) }
        </code>
        </>
    )
}
