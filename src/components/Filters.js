import React, { Component } from 'react';
import { Checkbox, Button, Select } from "antd";

class Filters extends Component {

    render() {
        const {manList, dateList, searchClick, searchChange} = this.props;
        const date = [];
        dateList.map((i) => date.push(<Select.Option key={i}>{i}</Select.Option>));

        return (
            <div className="filters">
                <h4>Производитель</h4>
                {
                    <Checkbox.Group options={manList} onChange={(checked) => searchChange('filter-man', checked)}/>
                }
                <h4>Дата выхода на рынок</h4>
                {
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={(checked) => searchChange('filter-date', checked)}
                    >
                        {date}
                    </Select>
                }
                <Button onClick={searchClick} type="primary" style={{ width: '100%' }}>Показать</Button>
            </div>
        )
    }
}

export {Filters};