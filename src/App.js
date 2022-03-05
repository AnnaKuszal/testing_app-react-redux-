import React from 'react';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Header from './components/layout/Header/Header';
import NavBar from './components/layout/NavBar/NavBar';
import TopBanner from './components/layout/TopBanner/TopBanner';
import Homepage from './components/views/Homepage/Homepage';
import Footer from './components/layout/Footer/Footer';

import './styles/global.scss';


const App = () => (
  <MainLayout>
    <Header title='Pizzeria GIULIA'/>
    <NavBar />
    <TopBanner />
    <Homepage title='Home/'/>
    <Footer text='Copyright ©2020 All rights reserved'/>
  </MainLayout>
);

export default App;
  