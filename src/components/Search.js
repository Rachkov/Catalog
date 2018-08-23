import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class Search extends Component {
    render () {
        return (
            <Form inline className="search">
                <FormGroup>
                    <FormControl type="text" placeholder="Seaaaaarch" />
                </FormGroup>
                <Button type="submit">Search</Button>
            </Form>
        )
    }
}

export { Search }