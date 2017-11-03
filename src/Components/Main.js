import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Students from './Students';
import About from './About';
import Details from './Details';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path = '/' component = {Students} />
                <Route exact path = '/about' component = {About} />
                <Route exact path = '/students/add' component = {AddStudent} />
                <Route exact path = '/students/edit/:id' component = {EditStudent} />
                <Route exact path = '/students/:id' component = {Details} />
            </Switch>
        </main>
    )
    
}

export default Main