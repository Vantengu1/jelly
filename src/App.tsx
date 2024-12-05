/* eslint-disable react-refresh/only-export-components */
import './App.css'
import Header from '../src/components/Header/index.tsx'
import Cards from './components/Cards/index.tsx'
import { createContext, Dispatch, useState } from 'react'
import Search from './components/Search/index.tsx'
import Example from './components/Example/index.tsx'
import useOnlineStatus from './hooks/useOnlineStatus.ts'
import useDeviceType, { DeviceType } from './hooks/useDeviceType.ts'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'


type ContextType = {
  theme : string;
  setTheme: Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ContextType | null>(null);

function App() {

  // const [filterValue, setFilterValue] = useState("");
  
  // const [theme, setTheme] = useState("light");

  // const status = useOnlineStatus();
  // console.log("status", status);

  // const windowSize = useDeviceType();
  // console.log(windowSize);
  
  
  
  return (
    <RouterProvider router={router}/>
  );
};

export default App


{/* <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`container ${theme}`}>
      <Header />
      
      {windowSize === DeviceType.MOBILE && <h2>MOBILE</h2>}
      {windowSize === DeviceType.TABLET && <h2>TABLET</h2>}
      {windowSize === DeviceType.DESKTOP && <h2>DESKTOP</h2>}

      <Example />
      <Search setFilterValue={setFilterValue}/>
      <Cards filterValue={filterValue}/>
    </div>
    </ThemeContext.Provider> */}