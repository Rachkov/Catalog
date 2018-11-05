import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Tabs } from 'antd';

class ComputerInfo extends Component {
    componentDidMount() {
        const { getLaptop, match: { params: { id } } } = this.props;
        getLaptop(id);
    }

    render() {
        const { data: { data } } = this.props;
        if (data) {
            const manufacturer = data.find((n) => n.name === 'Manufacturer').value;
            const model = data.find((n) => n.name === 'Model').value;
            const img = data.find((n) => n.name === 'img1').value;
            const diagonal = data.find((n) => n.name === 'Diagonal').value;
            const scrRes = data.find((n) => n.name === 'Screen Resolution').value;
            const CPU = data.find((n) => n.name === 'CPU').value;
            const modelCPU = data.find((n) => n.name === 'Model CPU').value;
            const RAM = data.find((n) => n.name === 'RAM').value;
            const typeHD = data.find((n) => n.name === 'Type HD').value;
            const sizeHD = data.find((n) => n.name === 'Size HD').value;
            const graphicsCard = data.find((n) => n.name === 'Graphics Card').value;
            let color = data.find((n) => n.name === 'Color').value;
            let os = data.find((n) => n.name === 'os').value || 'Операционная система неизвестна';

            return(
                <div>
                    <h3>Ноутбук {manufacturer} {model}</h3>
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Описание" key="1">
                            <img alt="hop" src={`http://localhost:3000/${img}`}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Характеристики" key="2">
                            <p>{diagonal}" {scrRes}, {CPU} {modelCPU}, {RAM}ГБ, {typeHD} {sizeHD}ГБ, {graphicsCard}, {os}, {color}</p>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            )
        }
        return (
            <div>

            </div>
        )

    }
}

export default withRouter(ComputerInfo);