import * as React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../item-list/list-item.component';
import PaginationRounded from '../pagination/pagination.component';
import SearchBox from '../search-box/search-box.component';

const ListComponent = () => {
    const resultsState = useSelector((state: any) => state.data);

    const { results, resultsToDisplay, rsultsToHighlight } = resultsState;
    let pagLength = results?.length > 0 ? Math.round(results?.length / 10) : results?.length;

    if (pagLength === 0 && results?.length > 0) {
        pagLength = 1
    }

    return (<React.Fragment>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <SearchBox />
            {
                resultsToDisplay?.map((r: { url: string, text: string }, i: number) => (<ListItem item={r} key={i} />))
            }
            <PaginationRounded paginationCount={pagLength} />
        </div>
    </React.Fragment>);
};

export default ListComponent;