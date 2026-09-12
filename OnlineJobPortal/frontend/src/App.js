import { ToastContainer } from 'react-toastify';
import './App.css';
import Register from './components/auth/Register';

function App() {
  return (
    <>
    <Register/>
    <ToastContainer
    position='top-right'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    />
    </>
  );
}

export default App;
