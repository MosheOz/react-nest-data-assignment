import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

interface Props {
    item: {
        url: string;
        text: string;
    }
}

const ListItem: React.FC<Props> = ({ item }) => {
    const resultsState = useSelector((state: any) => state.data);
    const { rsultsToHighlight } = resultsState;

    return (
        <Box sx={{ minWidth: 275 }} style={{ width: 550, margin: '15px 15px' }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="body2">
                        {rsultsToHighlight ? getHighlightedText(item.text, rsultsToHighlight, item.url) : <a href={item.url}>
                            {item.text}
                        </a>}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
};

const getHighlightedText = (text: any, highlight: any, url: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <a href={url}>{parts.map((part: any) => part.toLowerCase() === highlight.toLowerCase() ? <b style={{ background: "yellow" }}>{part}</b> : part)}</a>;
}

export default ListItem;

