import logo from './logo.svg';
import './App.css';
import { AppContext } from './context/contextAPI';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import Video from './components/Video';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <AppContext>
     <BrowserRouter>
      <div className='flex flex-col h-full'>
      <Header />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
        <Route path='/video/:id' element={<Video />}/>
      </Routes>
      </div>
     </BrowserRouter>
    </AppContext>
  );
}

export default App;
