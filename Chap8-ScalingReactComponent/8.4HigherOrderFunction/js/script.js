var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      { onClick: this.props.handleClick },
      this.props.lable
    );
  }
}
class Link extends React.Component {
  render() {
    return React.createElement(
      "a",
      { onClick: this.props.handleClick },
      this.props.lable
    );
  }
}
class Img extends React.Component {
  render() {
    return React.createElement("img", {
      onClick: this.props.handleClick,
      src: "https://elasq.com/wp-content/uploads/2021/08/message-1.png",
      width: 32
    });
  }
}

const ShowMess = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { lable: "Show Img" };
      this.state.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      document.getElementById("img").src = "../logo.png";
    }
    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      return React.createElement(Component, _extends({}, this.state, this.props));
    }
  };
};

const EnhanceButton = ShowMess(Button);
const EnhanceLink = ShowMess(Link);
const EnhanceImg = ShowMess(Img);
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(EnhanceButton, null),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement(EnhanceLink, null),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement(EnhanceImg, null),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement("img", { id: "img" })
), document.getElementById("content"));
