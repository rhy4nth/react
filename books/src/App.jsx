import { useState } from "react";
import './App.css';
import Booklist from "./components/Booklist";
import Header from './components/header';



function App() {
  return (
    <>
    <book title="boek 1" author="beau" image="./images/book.webp"/>

    <layout>
      <Header/>
        <Booklist/>
    </layout>
    </>
  )
}

export default App;
