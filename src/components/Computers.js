import React, {Component} from 'react';
import {Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import {Computer} from './Computer';

class Computers extends Component {
  state = {
    count: 10,
    quantity: 0,
    searchInput: '',
    search: '',
  };

  moreClick = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count += 10}); // TODO: this.state.count + 10
  };

  searchChange = (e) => {
    e.preventDefault();
    this.setState({searchInput: e.currentTarget.value});
  };

  searchClick = (e) => {
    e.preventDefault();
    this.setState({search: this.state.searchInput, count: 10});
  };

  renderTemp() { // TODO: придумай имя получше) заеб конечно, но можно что-то вроде preRenderComputers
    const {data} = this.props;
    const {search} = this.state;
    let renderData = [];

    const temp = data.map(function(item, index) { // TODO: сделать стрелочной
      const man = item.find((n) => n.name === 'Manufacturer').value;
      const mod = item.find((n) => n.name === 'Model').value;
      let str = `${man} ${mod}`;
      if (str.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        return <Computer key={index} data={item}/>;
      }
      // TODO: если функция имеет return в условии, то должен быть и дефолтный return, return null;
    });
    temp.forEach(function(item) { // TODO: сделать стрелочной
      if (item !== undefined) { // TODO: боги пдосказывают, что все можно сделать одним .map, который выше (даже то, что написано ниже)
        renderData.push(item);
      }
    });

    this.state.quantity = renderData.length; // TODO: нельзя напрямую присваивать значение в стэит, используй сэтСтэит
    return renderData.slice(0, this.state.count); // TODO: slice можно убрать, и запихнуть проверку индексов в .forEach выше
  }

  visibleButton() { // TODO: главное что работает)
    if (this.state.quantity > 0 && this.state.quantity <= this.state.count) {
      return <h4>Всего {this.state.quantity} товаров</h4>;
    } else if (this.state.quantity >= this.state.count) {
      return <Button onClick={this.moreClick}>Показать ещё</Button>;
    } else if (this.state.quantity === 0) {
      return <h4>Товаров не найдено</h4>;
    }
  }

  render() {
    const {searchInput} = this.state;

    return (
      <div>
        {/* TODO: сделать поиск через компонент Search, его конечно придется дописать */}
        <Form inline className="search">
          <FormGroup>
            <FormControl onChange={this.searchChange}
              value={searchInput}
              type="text"
              placeholder="Seeeearch"
            />
          </FormGroup>
          <Button onClick={this.searchClick} type="submit">Search</Button>
        </Form>
        {this.renderTemp()}
        <div className="showMore">
          {this.visibleButton()}
        </div>
      </div>
    );
  }
}

export {Computers};
