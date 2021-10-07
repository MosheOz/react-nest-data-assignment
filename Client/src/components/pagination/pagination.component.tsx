import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { getResults } from '../../redux/actions/data.actions';

interface Props {
    paginationCount: number
}

const PaginationRounded: React.FC<Props> = ({ paginationCount }) => {
    const dispatch = useDispatch();

    return (
        <Stack spacing={2}>
            <Pagination disabled={paginationCount === 1 || paginationCount === 0}
                count={paginationCount}
                hideNextButton={true}
                hidePrevButton={true}
                shape="rounded" onChange={(e: any) => dispatch(getResults(+e.target.textContent - 1))} />
        </Stack>
    );
}

export default PaginationRounded;