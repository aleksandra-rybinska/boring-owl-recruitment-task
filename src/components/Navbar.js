import { Box, Switch } from '@material-ui/core';

const Navbar = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <div>
            <Box
                mx={15}
                display='flex'
                alignItems='baseline'
                justifyContent='flex-end'>
                <p>Switch mode</p>
                <Box display='flex' alignItems='baseline' mx={3}>
                    <h3>light</h3>
                    <Switch color='primary' onChange={toggleTheme} />
                    <h3>dark</h3>
                </Box>
            </Box>
        </div>
    );
};

export default Navbar;
