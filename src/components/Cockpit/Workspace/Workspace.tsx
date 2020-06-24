import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import {
    AppState,
    ADD_PART_TO_LIST,
    DELETE_PART_FROM_LIST,
    EDIT_PART_FROM_LIST,
    INFO_PART_FROM_LIST,
    PartsActionTypes,
} from '../../../store/types';

import PartsList from './PartsList/PartsList';
import Account from './Account/Account';
import AddParametric from './AddParametric/AddParametric';

const Workspace = (props: PropsFromRedux) => {

    return (
        <main>
            <Switch>
                <Route path="/list" exact render={ () => (
                    <PartsList
                        list={props.partsList}
                        add={props.onAddPart}
                        info={props.onInfoPart}
                        edit={props.onEditPart}
                        delete={props.onDeletePart} />
                )} />
                <Route path="/parametric" component={AddParametric} />
                <Route path="/login" component={Account} />
                <Redirect from="/" to="/list" />
            </Switch>
        </main>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        partsList: state.partsList,
    }
}
const mapDispatchToProps = ( dispatch: Dispatch<PartsActionTypes> ) => {
    return {
        onAddPart: () => dispatch({
            type: ADD_PART_TO_LIST }),
        onDeletePart: (id: number) => dispatch({
            type: DELETE_PART_FROM_LIST,
            payload: { id: id } }),
        onInfoPart: (id: number) => dispatch({
            type: INFO_PART_FROM_LIST,
            payload: { id: id } }),
        onEditPart: (id: number) => dispatch({
            type: EDIT_PART_FROM_LIST,
            payload: { id: id } }),
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
//type Dispatch<S> = Redux.Dispatch<S>;

export default connector( Workspace );
