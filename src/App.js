
import './App.css';
import Homepage from './pages/Homepage';
import Product from './components/product';
import { data,imagePacks,images,titluri,preturi } from './data';
import Contact from './pages/Contact';
import Viewer from './components/productViewer';

function App() {


  let products = [];

  
  for(let i=0;i<10;i++)
  {
    products.push(<Product number={i} key={titluri[i]} text={data[i]} image={images[i]} title={titluri[i]}></Product>)
  }

  let currentPage;
  switch (window.location.pathname)
  {
  case "/":
    currentPage=<>
    <Homepage></Homepage>
    <div className="tabel">
   {products}
    </div>
    <Contact> </Contact>
    </>
    break;
  
  case "/productview0":
    currentPage=<Viewer prices={preturi[0]} text={data[0]} title={titluri[0]} pack={imagePacks[0]}></Viewer>
    break;

  case "/productview1":
    currentPage=<Viewer prices={preturi[1]} text={data[1]} title={titluri[1]} pack={imagePacks[1]}></Viewer>
    break;
  
  case "/productview2":
    currentPage=<Viewer prices={preturi[2]} text={data[2]} title={titluri[2]} pack={imagePacks[2]}></Viewer>
    break;

  case "/productview3":
    currentPage=<Viewer prices={preturi[3]} text={data[3]} title={titluri[3]} pack={imagePacks[3]}></Viewer>
    break;

  case "/productview4":
    currentPage=<Viewer prices={preturi[4]} text={data[4]} title={titluri[4]} pack={imagePacks[4]}></Viewer>
    break;
          
  case "/productview5":
    currentPage=<Viewer prices={preturi[5]} text={data[5]} title={titluri[5]} pack={imagePacks[5]}></Viewer>
    break;

  case "/productview6":
    currentPage=<Viewer prices={preturi[6]} text={data[6]} title={titluri[6]} pack={imagePacks[6]}></Viewer>
    break;
      
  case "/productview7":
    currentPage=<Viewer prices={preturi[7]} text={data[7]} title={titluri[7]} pack={imagePacks[7]}></Viewer>
    break;
                
  case "/productview8":
    currentPage=<Viewer prices={preturi[8]} text={data[8]} title={titluri[8]} pack={imagePacks[8]}></Viewer>
    break;
  case "/productview9":
    currentPage=<Viewer prices={preturi[9]} text={data[9]} title={titluri[9]} pack={imagePacks[9]}></Viewer>
    break;

  default:
    currentPage=<>
    <Homepage></Homepage>
    <div className="tabel">
   {products}
    </div>
    <Contact> </Contact>
    </>
  }

  return (
    <>
    {currentPage}
    </>
  );
}

export default App;
