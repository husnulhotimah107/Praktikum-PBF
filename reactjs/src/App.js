import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Content from './Component/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
