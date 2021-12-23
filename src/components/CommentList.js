import { Box, Paper } from '@material-ui/core';

const CommentList = ({ comments }) => {
    return (
        <Box
            width='100%'
            display='flex'
            alignItems='center'
            flexDirection='column'>
            {comments.map((comment) => (
                <ul key={comment.id}>
                    <li>
                        <h4>{comment.name}</h4>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </li>
                </ul>
            ))}
        </Box>
    );
};

export default CommentList;
