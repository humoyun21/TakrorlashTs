import { Routes, Route } from "react-router-dom";
import {About, Contact, Home} from '@pages'
import {Header} from '@components'
 
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Header/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1> }/>
      </Routes>
    </>
  );
};

export default App;