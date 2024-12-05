import { useRef } from "react";

const Example = () => {

    // const pRef = useRef<HTMLParagraphElement | null>(null);
    
    // const handleClick = () => {
    //     if (pRef.current) {
    //         pRef.current.textContent = "New object" 
    //     }
    // }

    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleClick = () => {
            if (inputRef.current) {
                inputRef.current.focus(); 
            }
        };

    return(
        <>
            {/* <p ref={pRef}>text</p> */}
            <input ref = {inputRef} type="text" />
            <button onClick={handleClick}>Push</button>
        </>
    )
};

export default Example;