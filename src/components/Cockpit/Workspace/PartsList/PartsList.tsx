import React from 'react'

import Part from './Part';
import AddPart from './AddPart';

import Grid from '@material-ui/core/Grid';

const addPartHandler = () => {
    console.log('[onClick -> addPartHandler]');
}

type ListProps = {
    list: {
        id: number
        name: string
        qty: number
    }[]
}

const PartsList = (props: ListProps) => {
    return (
        <Grid container spacing={3} style={{padding: 3}}>
            {   props.list.map( part =>
                (
                    <Grid item key={part.id}>
                        <Part info={part}/>
                    </Grid>
                ))
            }
            <Grid item>
                <AddPart action={addPartHandler} />
            </Grid>
        </Grid>
    )
}

export default PartsList;