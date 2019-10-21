import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Invoice from '../components/Invoice/Invoice';
import Footer from '../components/Footer/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='wrapper'>
    <Sidebar />
    <div className='main'>
      <Header />
      <Invoice />
      <Footer />
    </div>
  </div>
);

export default App;
