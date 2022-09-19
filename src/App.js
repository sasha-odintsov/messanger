import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import MainPage from './components/MainPage/MainPage';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='chat' element={<Chat />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
