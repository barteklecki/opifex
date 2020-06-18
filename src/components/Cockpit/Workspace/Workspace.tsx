import React, { Component } from 'react';

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

    render() {
        return (
            <main>
                <PartsList list={this.state.partsList}/>
                <AddParametric />
                <Account />
            </main>
        );
    }
}

export default Workspace;
