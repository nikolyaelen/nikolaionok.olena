import React from 'react'
import './App.css'


function App() {
  
    // створити новий JSX-елемент з назвою jsxElement.
    const jsxElement = <h1>I am a JSX element</h1>;

    // створити новий JSX-елемент header
    const header = (
      <div>
          <h1>Welcome to React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
      </div>
    );

    // створити новий JSX-фрагмент
    const Fragment = (
      <>
          <h1>Welcome to React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
      </>
    );

    // створити новий JSX-елемент footer
    const footer = (
      <p>Copyright &copy; 2024</p>
    );


  return (
    <div>
        {jsxElement}
        {header}
        {Fragment}
        {footer}
    </div>

  )
}
export default App;
