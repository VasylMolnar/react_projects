import { useState, React } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import toast, { Toaster } from 'react-hot-toast';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '135ch',
      },
    },
  },
}));

const SearchCard = ({ setSearch, setIsLoading, setPage }) => {
  const [prevSearchValue, setPrevSearchValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.input.value;

    if (searchValue === prevSearchValue) {
      toast('Nothing has changed', {
        icon: '👏',
      });
      return;
    }

    if (searchValue.trim() === '') {
      toast.error('Enter a search term.');
      return;
    }

    setPrevSearchValue(searchValue);
    setPage(1);
    setIsLoading(true);
    setSearch(searchValue);
  };

  return (
    <form
      style={{ position: 'relative', width: '100%', height: '70px' }}
      onSubmit={e => onSubmit(e)}
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <Box sx={{ flexGrow: 1 }} style={{ position: 'fixed', width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Image Finder
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                name="input"
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </form>
  );
};

export default SearchCard;
