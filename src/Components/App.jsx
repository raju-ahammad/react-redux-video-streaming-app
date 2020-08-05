import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate'
import StreamDelete from './Streams/StreamDelete'
import StreamEdit from './Streams/StreamEdit'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={ StreamList}/>
                <Route path="/streams/create" component={ StreamCreate }/>
                <Route path="/streams/delete" component={ StreamDelete }/>
                <Route path="/streams/edit" component={ StreamEdit }/>
                <Route path="/streams/show" component={ StreamShow }/>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App
