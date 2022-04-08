class Button extends React.Component {
  render() {
    return <button onClick={this.props.handleClick}>{this.props.lable}</button>;
  }
}
class Link extends React.Component {
  render() {
    return <a onClick={this.props.handleClick}>{this.props.lable}</a>;
  }
}
class Img extends React.Component {
  render() {
    return (
      <img
        onClick={this.props.handleClick}
        src="https://elasq.com/wp-content/uploads/2021/08/message-1.png"
        width={32}
      ></img>
    );
  }
}

const ShowMess = (Component) => {
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
      return <Component {...this.state} {...this.props} />;
    }
  };
};

const EnhanceButton = ShowMess(Button);
const EnhanceLink = ShowMess(Link);
const EnhanceImg = ShowMess(Img);
ReactDOM.render(
  <div>
    <EnhanceButton />
    <br />
    <br />
    <EnhanceLink />
    <br />
    <br />
    <EnhanceImg />
    <br />
    <br />

    <img id="img"></img>
  </div>,
  document.getElementById("content")
);
