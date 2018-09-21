import React from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

export default ({ searchChange, searchInput, searchClick }) => (
    <Form inline className="search">
        <FormGroup>
            <FormControl
                type="text"
                onChange={searchChange}
                value={searchInput}
                placeholder="Поиск в каталоге"
            />
        </FormGroup>
        <Button onClick={searchClick} type="submit">Искать</Button>
    </Form>
);