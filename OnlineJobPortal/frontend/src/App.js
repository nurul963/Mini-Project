import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRoute from './AppRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <AppRoute/>
    <ToastContainer
    position='top-right'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    />
    </BrowserRouter>
  );
}

export default App;
