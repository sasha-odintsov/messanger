import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import MainPage from './components/MainPage/MainPage';
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='chat' element={<ChatRoom />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
