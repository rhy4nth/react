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
    <Book title="boek 1" author="beau" image="./images/book.webp"/>

    <Layout>
        <Booklist/>
    </Layout>
    </>
  )
}

export default App;
