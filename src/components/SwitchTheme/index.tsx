import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {

    const curentTheme = useContext(ThemeContext);
    console.log(curentTheme);
    
    const handleClick = () => {
        if (curentTheme?.theme === "light") {
            curentTheme.setTheme("dark");
        } else {
            curentTheme?.setTheme("light")
        }
    };

    return(
    <div onClick={handleClick}>{curentTheme?.theme}</div>        
    );
};

export default SwitchTheme;

