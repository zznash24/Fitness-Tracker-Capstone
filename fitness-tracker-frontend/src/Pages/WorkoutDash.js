import WorkoutApp from '../Components/WorkoutApp';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function WorkoutDash({ userId }) {


    return (

        <Container>
            <Grid className='body-grid'>
                <WorkoutApp userId={userId} />
            </Grid>
        </Container>
    )
}

export default WorkoutDash;