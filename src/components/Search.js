import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class Search extends Component { // TODO: можно переделать в глупый компонент, если здесь уже окончательня логика.
  render() {
    return (
      <Form inline className="search">
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export {Search}; // TODO: этого я не понял
