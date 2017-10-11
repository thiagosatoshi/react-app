import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component
{
    state = { isChecked: false }

    componentDidMount()
    {
        this.setState({ isChecked: this.props.isChecked });
    }

    toggleCheckboxChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
        this.props.onChange && this.props.onChange();
    }

    render() {
        const { label, disabled, name } = this.props;
        const { isChecked } = this.state;
        const elementName = name || 'checkbox';

        return (
            <div>
                <input
                    type="checkbox"
                    name={elementName}
                    value={label}
                    checked={isChecked}
                    disabled={disabled}
                    onChange={this.toggleCheckboxChange}
                />
                <label htmlFor={elementName}>{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
  label     : PropTypes.string,
  name      : PropTypes.string,
  disabled  : PropTypes.bool,
  onChange  : PropTypes.func,
  isChecked : PropTypes.bool
}

export default Checkbox