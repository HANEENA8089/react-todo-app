import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked // Initialize checkbox state
        };
    }

    handleChange(e) {
        const { checked } = e.target; // Capture new checkbox state
        if (checked) {
            // Show custom confirmation dialog
            const confirmChange = this.showConfirmDialog();
            if (confirmChange) {
                this.setState({ checked }); // Confirm and update state
                this.props.onChange(checked); // Notify parent component
            } else {
                e.target.checked = false; // Revert checkbox UI state
            }
        } else {
            // Unchecking does not require confirmation
            this.setState({ checked });
            this.props.onChange(checked);
        }
    }

    showConfirmDialog() {
        // Custom implementation of a confirm dialog
        const dialog = document.createElement('div');
        dialog.style.position = 'fixed';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.backgroundColor = 'white';
        dialog.style.padding = '20px';
        dialog.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        dialog.style.zIndex = '1000';

        dialog.innerHTML = `
            <p>Are you sure you want to mark this task as completed?</p>
            <button id="confirmButton">Confirm</button>
            <button id="cancelButton">Cancel</button>
        `;

        document.body.appendChild(dialog);

        return new Promise((resolve) => {
            document.getElementById('confirmButton').onclick = () => {
                document.body.removeChild(dialog);
                resolve(true);
            };
            document.getElementById('cancelButton').onclick = () => {
                document.body.removeChild(dialog);
                resolve(false);
            };
        });
    }

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

export default CheckBox;
