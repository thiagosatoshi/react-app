import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component
{
    state = { isChecked: false }

    toggleCheckboxChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <div>
                <input
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    onChange={this.toggleCheckboxChange}
                />
                <label>{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
  label     : PropTypes.string,
  onChange  : PropTypes.func
}

export default Checkbox