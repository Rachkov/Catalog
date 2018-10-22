import React, {Component} from 'react';
import {Input} from 'antd';

class Search extends Component {

    render() {
        const {searchChange, searchClick} = this.props;
        const Search = Input.Search;

        return(
            <div className="search">
                <Search
                    placeholder="input search text"
                    onChange={e => searchChange('search', e.target.value)}
                    onSearch={searchClick}
                    enterButton="Искать"
                    style={{ width: 500 }}
                />
            </div>
        )
    }
}

export default Search;
