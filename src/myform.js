import React from 'react';

var MyForm = React.createClass({
    getInitialState: function () {
        return {
            helloTo: "Hello world!",
            options: ['B']
        };
    },
    handleChange: function (event) {
        this.setState({
            helloTo: event.target.value.toLocaleUpperCase()
        });
    },
    handleSelChange: function (event) {
        this.setState({
            sel1: event.target.value
        });
        console.log("Updated sel1 to " + event.target.value);
    },
    handleMultiSelChange: function (event) {
        var checked = [];
        var sel = event.target;
        for (var i = 0; i < sel.length; i++) {
            var option = sel.options[i];
            if (option.selected) {
                checked.push(option.value);
            }
        }
        this.setState({
            options: checked
        });
    },
    submitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        console.log("Checkbox:"+this.refs.checked.getDOMNode().checked);
    },
    render: function () {
        return <form onSubmit={this.submitHandler}>
            <input
                type="text"
                value={this.state.helloTo}
                onChange={this.handleChange}/>
            <br />
            <select defaultValue="B" ref="sel_first">
                <option value="A">First Option</option>
                <option value="B">Second Option</option>
                <option value="C">Third Option</option>
            </select>
            <br />
            <select value={this.state.sel1} onChange={this.handleSelChange}>
                <option value="A">First Option</option>
                <option value="B">Second Option</option>
                <option value="C">Third Option</option>
            </select>
            <br />
            <select multiple='true'
                    value={this.state.options}
                    onChange={this.handleMultiSelChange}>
                <option value="A">First Option</option>
                <option value="B">Second Option</option>
                <option value="C">Third Option</option>
            </select>
            <br />
            <input
                ref="checked"
                type="checkbox"
                value="A"
                defaultChecked="true"/>
            <br />
            <button
                type="submit"> Speak
            </button>
        </form>
            ;
    }
});

module.exports = MyForm;