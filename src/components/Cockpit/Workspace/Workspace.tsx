import React, { Component } from 'react';
import Part from './PartList/Part';
import AddPart from './PartList/AddPart';

import Grid from '@material-ui/core/Grid';

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
                <Grid container spacing={3} style={{padding: 3}}>
                    {   this.state.partsList.map( part => 
                        (
                            <Grid item key={part.id}>
                                <Part info={part}/>
                            </Grid>
                        ))
                    }
                    <Grid item>
                        <AddPart />
                    </Grid>
                </Grid>
            </main>
        );
    }
}

export default Workspace;
