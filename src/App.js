import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RecentProducts from './Components/RecentProducts/RecentProducts';

function App() {
  return (
    <div className="App">
        <Header/>
        <Category/>
        <div className='ProductsWrapper'>
            <div className='container'>
              <AllProducts/>
              <RecentProducts/>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
