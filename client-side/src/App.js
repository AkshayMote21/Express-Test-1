
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './Components/Home';
import AddBookPage from './Components/AddBookPage';
import EditBookPage from './Components/EditBookPage';
import BookDetailsPage from './Components/BookDetailsPage';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddBookPage' element={<AddBookPage/>}/>
        <Route path='/EditBookPage' element={<EditBookPage/>}/>
        <Route path='/BookDetailsPage' element={<BookDetailsPage/>}/>
        <Route path='/BookList' element={<BookList/>}/>
        <Route path='/BookForm' element={<BookForm/>}/>
        <Route path='/BookDetails' element={<BookDetails/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
