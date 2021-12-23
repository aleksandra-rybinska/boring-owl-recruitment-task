import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import { useQuery } from 'react-query';
import axios from 'axios';
import { LinearProgress, Box } from '@material-ui/core';

import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';

function App() {
    const [theme, setTheme] = useState('light');
    const { data, status } = useQuery('comments', () =>
        axios('https://gorest.co.in/public/v1/comments')
    );

    const comments = data?.data.data;
    console.log('comments', comments);

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
        </ThemeProvider>
    );
}

export default App;
