import React from 'react'

import Part from './Part';
import AddPart from './AddPart';

import Grid from '@material-ui/core/Grid';

type ListProps = {
    list: {
        id: number
        name: string
        qty: number
    }[],
    add: () => void
    info: (id: number) => void
    edit: (id: number) => void
    delete: (id: number) => void
}

const PartsList = (props: ListProps) => {


    return (
        <Grid container spacing={3} style={{padding: 3}}>
            {   props.list.map( part =>
                (
                    <Grid item key={part.id}>
                        <Part 
                            part={part}
                            info={props.info}
                            edit={props.edit}
                            delete={props.delete}
                        />
                    </Grid>
                ))
            }
            <Grid item>
                <AddPart add={props.add} />
            </Grid>
        </Grid>
    )
}

export default PartsList;