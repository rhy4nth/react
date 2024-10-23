import { useState } from "react";
import './App.css';
import Booklist from "./components/Booklist";
import Header from './components/Header';
import Book from './components/Book';
import Layout from './components/Layout'



function App() {
  return (
    <>
    <Header/>
    <Layout>
     
    <h1>dit zijn mijn boeken</h1>
    <Book title="boek 1" author="beau" image="./images/book.webp"/>
    <Book title="boek 1" author="beau" image="./images/book.webp"/>
    
    </Layout>
    </>
  )
}

export default App;
