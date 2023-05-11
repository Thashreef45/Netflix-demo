import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/NavBar/Navbar';
import RowPost from './Component/RowPost/RowPost';
import {originals ,acton,comedy, horror} from './Urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url={originals} title='Netflix-Originals'/>
      <RowPost url={acton} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>

\    </div>
  );
}

export default App;
