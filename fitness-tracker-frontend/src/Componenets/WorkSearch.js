import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchWork from '../Hooks/SearchWork';

function WorkoutSearch(props) {
    return (
        <form>
            <div>
                <b>Search for a workout by muscle or equipment or by exercise</b>
            </div>
            <form>
                <Form.Control>
                    <h1>Search By</h1>
                    <Form.Select id='searchBy' name="searchBy" label="Workout Search" value={props.values.searchBy} onChange={props.handleChange}>
                        <Dropdown.Item value="name">Exercise Name</Dropdown.Item>
                        <Dropdown.Item value="target">Target Muscle</Dropdown.Item>
                        <Dropdown.Item value="equipment">Equipment</Dropdown.Item>
                    </Form.Select>
                </Form.Control>
                <Form.Control value={props.values.searchTerm} onChange={props.handleChange} name="searchTerm" label="Search" />
                <Button type="submit" onClick={(event) => {
                    event.preventDefault();
                    props.handleSubmit(props.values, props.searchByHolder, props.searchTermHolder);
                }}>Submit</Button>
            </form>
        </form>
    )
}
export default WorkoutSearch;