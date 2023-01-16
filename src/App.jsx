import React from 'react';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Realstate } from './components/realstate/Realstate';
import { Realtor } from './components/realtor/Realtor';

function App() {
  return (
    <>
        <Header />
        <Realstate />
        <Realtor />
        <About />
        <Contact />
        <Footer />
    </>
  )
}

export default App