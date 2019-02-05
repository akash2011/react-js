
var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            active: true
        };
    },
    handleClick: function handleClick() {
        this.setState({
            active: !this.state.active
        });
    },
    render: function render() {
        var buttonSwitch = this.state.active ? "On" : "Off";
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Click the button!"
            ),
            React.createElement("input", { type: "submit", onClick: this.handleClick }),
            React.createElement(
                "p",
                null,
                buttonSwitch
            )
        );
    }
});
React.render(React.createElement(App, null), document.getElementById("content"));

var ButtonForm = React.createClass({
    displayName: "ButtonForm",

    focusOnField: function focusOnField() {
        React.findDOMNode(this.refs.textField).focus();
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement("input", {
                type: "text",
                ref: "textField" }),
            React.createElement("input", {
                type: "submit",
                value: "Focus on the input!",
                onClick: this.focusOnField })
        );
    }
});
var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                " Welcome to the focus app!"
            ),
            React.createElement(ButtonForm, null)
        );
    }
});
React.render(React.createElement(App, null), document.getElementById("content"));

function tick() {
    var element = React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello, world!'
      ),
      React.createElement(
        'h2',
        null,
        'It is ',
        new Date().toLocaleTimeString(),
        '.'
      ),
      React.createElement(
          'p',
          null,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ),
      React.createElement(
        'h5',
        null,
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    )
    );
    // highlight-next-line
    React.render(element, document.getElementById('root'));

  }
  
  setInterval(tick, 1000);
