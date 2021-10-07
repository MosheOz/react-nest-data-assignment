import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { onToggleQueriesContainer } from '../../redux/actions';
import QueryItem from '../query-item/query-item.componet';

export default function QueriesSavedComponent() {

    const queriesState = useSelector((state: any) => state.search);
    const dispatch = useDispatch();
    const { queriesSaved, toggleQueriesContainer } = queriesState;

    return (
        <React.Fragment>
            <Drawer
                anchor={'left'}
                open={toggleQueriesContainer}
                onClose={() => {
                    dispatch(onToggleQueriesContainer())
                }}
            >
                <h5>Queries History</h5>
                {queriesSaved.map((q: string, i: number) => (<QueryItem q={q} key={i} />))}
            </Drawer>
        </React.Fragment>
    );
}