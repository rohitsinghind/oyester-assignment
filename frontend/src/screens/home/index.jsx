import React from 'react'
import { styles } from './styles';
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../store/Actions/User';

import {Container,Paper,Typography,Stack,Button} from '@mui/material';

export default function Home() {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);
    
    const logoutHandler = () => {
        dispatch(logoutUser());
      };

  return (
    <>
        <Container maxWidth="xl" sx={styles.box}>
            <Paper variant="outlined" sx={{ p: 4 }}>
                <Stack direction="row" spacing={2}>
                    <Typography sx={styles.text1}>Name</Typography>
                    <Typography sx={styles.text2}>{user?.name}</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Typography sx={styles.text1}>Email</Typography>
                    <Typography sx={styles.text2}>{user?.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Typography sx={styles.text1}>User Id.</Typography>
                    <Typography sx={styles.text2}>{user?._id}</Typography>
                </Stack>
            </Paper>
            <Button sx={styles.btn} onClick={logoutHandler} variant="outlined">Logout</Button>
        </Container>
        
    </>
  )
}
