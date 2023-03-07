import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/WorkSearch.css';


function WorkoutSearch(props) {
    return (
        <Paper>
            <Typography>
                <b>Search for a workout by muscle or equipment or by exercise</b>
            </Typography>
            <form>
                <FormControl sx={{ width: '75%' }}>
                    <InputLabel>Search By</InputLabel>
                    <Select id='searchBy' name="searchBy" label="Workout Search" value={props.values.searchBy} onChange={props.handleChange}>
                        <MenuItem value="name">Exercise Name</MenuItem>
                        <MenuItem value="target">Target Muscle</MenuItem>
                        <MenuItem value="equipment">Equipment</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal" sx={{ width: '75%' }}>
                <TextField value={props.values.searchTerm} onChange={props.handleChange} name="searchTerm" label="Search" />
                </FormControl>
                <br />
                <Button className='sub-button' type="submit" variant='outlined' onClick={(event) => {
                    event.preventDefault();
                    props.handleSubmit(props.values, props.searchByHolder, props.searchTermHolder);
                }}>Submit</Button>
            </form>
        </Paper>
    )
}
export default WorkoutSearch;