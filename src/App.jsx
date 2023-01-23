import React from 'react';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Realstate } from './components/realstate/Realstate';
import { Realtor } from './components/realtor/Realtor';
import { TopRealtors } from './components/topRealtors/TopRealtores';

function App() {
  return (
    <>
        <Header />
        <Realstate />
        <Realtor />
        <TopRealtors />
        <About />
        <Contact />
        <Footer />
    </>
  )
}

export default App