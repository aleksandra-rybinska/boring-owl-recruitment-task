import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import { useQuery } from 'react-query';
import axios from 'axios';
import { LinearProgress, Box } from '@material-ui/core';

import CommentList from './components/CommentList';
import ImageSection from './components/ImageSection';
import Navbar from './components/Navbar';

function App() {
    const [theme, setTheme] = useState('light');
    const { data, status } = useQuery('comments', () =>
        axios('https://gorest.co.in/public/v1/comments')
    );

    const comments = data?.data.data;

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            {status === 'loading' && (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            )}
            {status === 'error' && (
                <div>
                    <h1>Błąd pobierania danych</h1>
                </div>
            )}
            <Navbar theme={theme} setTheme={setTheme} />
            <ImageSection />
            {status === 'success' && <CommentList comments={comments} />}
        </ThemeProvider>
    );
}

export default App;
