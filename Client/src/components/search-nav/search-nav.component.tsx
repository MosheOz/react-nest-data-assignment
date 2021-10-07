import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../constants/constants.types';
import { onNewQuery, onToggleQueriesContainer } from '../../redux/actions'
import { onNewResults, getResults } from '../../redux/actions/data.actions';
import QueriesSavedComponent from '../queries-saved/queries-saved.component';
import { Search, SearchIconWrapper, StyledInputBase } from '../../shared/search.shared';


const SearchNavAppBar = () => {
  const [query, setQuery] = useState<string>('');

  const dispatch = useDispatch();
  const searchSelector = useSelector((state: any) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(onNewQuery(query));
      fetch(`${API}${query}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then(response => response.json())
        .then(results => {
          dispatch(onNewResults(results));
          dispatch(getResults(0))
        })
    }
  }, [query]);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={() => {
                if (searchSelector?.queriesSaved?.length) {

                  dispatch(onToggleQueriesContainer())
                }
              }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Search Engine
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => {
                  let counter = 500;
                  setTimeout(() => setQuery(e.target.value), counter)

                }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <QueriesSavedComponent />
    </React.Fragment>
  );
}

export default SearchNavAppBar;
