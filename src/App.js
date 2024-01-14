import { Header } from './components/Header.jsx';
import { Main } from './components/Main.jsx';

function App() {
  return (
    <div className="App" style={{ margin: 'auto', width: '50%', border:'1px black solid', padding:'10px' }}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
