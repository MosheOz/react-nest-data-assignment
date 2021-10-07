import './App.css';
import ListComponent from './components/list/list.component';
import SearchNavAppBar from './components/search-nav/search-nav.component';

function App() {
  return (
    <div>
      <SearchNavAppBar />
      <ListComponent />
    </div>
  );
}

export default App;
