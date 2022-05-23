/*
  1. import statements 
  2. comp defn 
      * should return JSX 
      * JSX will look like HTML -- but not HTML 
  3. export 
*/

// imports 
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

// alo known as root comp / default comp / main comp 
// comp defn 
// ideal place for layouts
function App() {
  // comp should return JSX 
  return(
    <div>
      <Header />

      <h1>Success</h1> 
      
      <Footer></Footer>
    </div>
  );
}

// export 
export default App;
