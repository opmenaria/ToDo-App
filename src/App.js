import './App.css';
import Todo from './components/Todo';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}