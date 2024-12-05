import { ChangeEvent, Dispatch, FC, useState } from "react";
import style from "./style.module.css";

type Props = {
    setFilterValue: Dispatch<React.SetStateAction<string>>;
}

const Search: FC<Props> = ({setFilterValue}) => {

    const [inputValue, setInputValue] = useState("");
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    console.log(inputValue);
    
    const handleClick = () => {
        setFilterValue(inputValue);
    }; 

    // const [selectValue, setSelectValue] = useState("");
    // const handleChangeSelect = (event:ChangeEvent<HTMLSelectElement>) => {
    //     setSelectValue(event.target.value);
    // }

    return(
        <div className={style.container}>
            <input value={inputValue} type="text" onChange={(event)=>handleChange(event)}/>
            <button onClick={handleClick}>Search</button>
            {/* <select value={selectValue} onChange={(event)=>handleChangeSelect(event)}>
                <option value="1">apple - 1</option>
                <option value="2">apple - 2</option>
                <option value="3">apple - 3</option>
            </select> */}
        </div>
    );
};

export default Search;