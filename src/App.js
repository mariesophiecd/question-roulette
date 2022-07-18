import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wheel from './components/Wheel';
import { Home} from './pages';




function App() {
  return (
    <div className="App">
      <Wheel />
      <header className="App-header">
        <Routes>
            
        </Routes>
      </header>
    </div>
  );
}

export default App;

/* <Route path='/theme' element={<Quiz />} />
            <Route path='/question' element='' />
            <Route path='/final_scores' element=''/> */

            /* <Route path='/' element={<Home />} />
          <Route path='/host' element={<Host/>} />
          <Route path='/client' element={<Client />} />
          <Route path='/quiz' element={<Quiz />}> */
          // </Routes>/</Route>
