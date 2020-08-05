import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
    return (
        <div>
            page One
            <Link to="/pagetwo"> Navigate to pagetwo</Link>
        </div>
    );
}
const pageTwo = () => {
    return (
        <div>
            page Two
            <Link to="/"> Navigate to one</Link>
            <button>Click me!</button>
        </div>
    );
}


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={ pageOne}/>
                <Route path="/pagetwo" component={ pageTwo}/>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App
