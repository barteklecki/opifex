import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PartsList from './PartsList/PartsList';
import Account from './Account/Account';
import AddParametric from './AddParametric/AddParametric';

type workspaceProps = {
}

class Workspace extends Component<workspaceProps> {

    state = {
        partsList: [
            {id: 0, name: 'Part1', qty: 1},
            {id: 1, name: 'Part2', qty: 1},
            {id: 2, name: 'Part3', qty: 1},
        ],
    }

    addPartHandler = () => {
        // find max objact id in array
        let newId = 1 + Math.max.apply(Math, this.state.partsList.map(function(obj) { return obj.id; }));
        if (!this.state.partsList.length) {
            newId = 0;
        }
        this.setState({
            partsList: [
                ...this.state.partsList,
                {id: newId, name: `Part${newId+1}`, qty: 1}
            ]
        })
    }

    deletePartHandler = (id: number) => {
        const newList = [...this.state.partsList];
        const index = newList.findIndex( element => element.id === id );
        newList.splice(index, 1);
        this.setState({
            partsList: [...newList]
        })
    }

    editPartHandler = (id: number) => {
        console.log(`[ Edit part id=${id} ]`);
    }

    infoPartHandler = (id: number) => {
        console.log(`[ Info about part id=${id} ]`);
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/list" exact render={ () => (
                        <PartsList
                            list={this.state.partsList}
                            add={this.addPartHandler}
                            info={this.infoPartHandler}
                            edit={this.editPartHandler}
                            delete={this.deletePartHandler} />
                    )} />
                    <Route path="/parametric" component={AddParametric} />
                    <Route path="/login" component={Account} />
                    <Redirect from="/" to="/list" />
                </Switch>
            </main>
        );
    }
}

export default Workspace;
