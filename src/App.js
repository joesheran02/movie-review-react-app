import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './Componets/AddReview';
import ViewReview from './Componets/ViewReview';
import SearchReview from './Componets/SearchReview';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddReview/>} />
      <Route path='/view' element={<ViewReview/>} />
      <Route path='/search' element={<SearchReview/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
