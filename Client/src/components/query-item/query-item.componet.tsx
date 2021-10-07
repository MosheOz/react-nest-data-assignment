import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { API } from '../../constants/constants.types';
import { useDispatch } from 'react-redux';
import { getResults, onNewResults } from '../../redux/actions/data.actions';
import { onToggleQueriesContainer } from '../../redux/actions';

interface Props {
    q: string
}

const QueryItem: React.FC<Props> = ({ q }) => {
    const dispatch = useDispatch();

    return (
        <Box sx={{ minWidth: 275 }} style={{ width: 550, margin: '15px 15px' }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="body2">
                        <span style={{
                            color: "blue",
                            cursor: "pointer"
                        }}
                            onClick={() => {
                                fetch(`${API}${q}`, {
                                    method: "GET",
                                    headers: { "Content-Type": "application/json" },
                                })
                                    .then(response => response.json())
                                    .then(results => {
                                        dispatch(onNewResults(results));
                                        dispatch(getResults(0))
                                        dispatch(onToggleQueriesContainer())
                                    })
                            }}>{q}</span>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
};

export default QueryItem;

