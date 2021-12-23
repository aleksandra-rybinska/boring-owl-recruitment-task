import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Navbar theme={theme} setTheme={setTheme} />
            <ImageSection />
        </ThemeProvider>
    );
}

export default App;
