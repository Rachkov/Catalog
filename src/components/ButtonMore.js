import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class ButtonMore extends Component {

    visibleButton() {
        const { quantity, renderData, moreClick} = this.props;

        if (quantity > 0 && quantity <= renderData.length) {
            return <h4>Всего {quantity} товаров</h4>;
        } else if (quantity === 0) {
            return <h4>Товаров не найдено</h4>;
        } else if (quantity >= renderData.length) {
            return <Button bsStyle="primary" onClick={moreClick}>Показать ещё</Button>;
        }
    }

    render() {
        return(
            <div className="showMore">
                {
                    this.visibleButton()
                }
            </div>
        )
    }
}

export {ButtonMore}