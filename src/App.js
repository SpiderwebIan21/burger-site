import React from 'react';
import './App.css'
import { Footer, Blog, Possibilities, Features, Spiderweb, Header} from './containers';
import  { Brand, Cta, Navbar } from './components';

const App = () => {
  return (
    <div className='App'> 
      <div className='gradient_bg'>
        <Navbar/>
        <Header />

      </div>
      <Brand/>
      <Spiderweb/>
      <Features/>
      <Possibilities/>
      <Cta/>
      <Blog />
      <Footer />
    </div>

  );
}

export default App;
