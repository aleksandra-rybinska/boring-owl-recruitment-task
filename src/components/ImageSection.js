import { Box } from '@material-ui/core';

const ImageSection = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <h1>PLACEDOG</h1>
            <h3>
                Below you can find a picture of dog. A random picture appears on
                every request.
            </h3>
            <a target='_blank' href='https://placedog.net/640/480?random'>
                <img
                    src={'https://placedog.net/640/480?random'}
                    alt='picture of dog'
                />
            </a>
        </Box>
    );
};

export default ImageSection;
