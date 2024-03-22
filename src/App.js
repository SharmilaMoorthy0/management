import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Price from './components/Price';
import Topbar from './components/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import Search from './components/Search';
import Hooks from './components/Hooks';
import Form from './components/Form';
import Studentlist from './components/Studentlist';
import { Toaster } from 'react-hot-toast';
import StudentDetails from './components/StudentDetails';
import { Userprovider } from './context/Context';

const toastoption={
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },

}

function App() {
  
  return (
    <div>
   <BrowserRouter>
   <Userprovider value={"sharmii"}>
        <Topbar/>
   <Routes>
    <Route path='/' element={<Home/>}> 
       <Route path='search' element={<Search/>}>
        <Route path='Settings' element={<Settings/>}></Route>
       </Route>
    </Route>

    <Route path='/dashboard' element={<Dashboard/>}> </Route>
    <Route path='/price' element={<Price/>}> </Route>
    <Route path='/contact' element={<Contact/>}> </Route>
    <Route path='/Hooks'  element={<Hooks/>}/>
    <Route path='/form'  element={<Form/>}/>
    <Route path='/student/list' element={<Studentlist/>}></Route>
    <Route path='/student/Details/:id' element={<StudentDetails/>}></Route>
   </Routes>
   </Userprovider>
   
   <Toaster position='right-bottom' toastOptions={toastoption}/>
   </BrowserRouter>
  
    </div>
  );
}

export default App;
