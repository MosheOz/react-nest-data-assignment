import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { onSearchHiglight } from '../../redux/actions/data.actions';
import { Search, SearchIconWrapper, StyledInputBase } from '../../shared/search.shared';

const SearchBox = () => {

    const dispatch = useDispatch();

    return <Search style={{ border: "1px solid black", marginTop: 15 }}>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e: any) => { dispatch(onSearchHiglight(e.target.value)) }}
        />
    </Search>
}

export default SearchBox;