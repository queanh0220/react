class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: {
                male: true,
                female: false
            },
            hobby: {
                music: true,
                game: true,
                movie: true
            },
            favoriteLanguage: "C++",
            info: ""
        };
    }

    handleRadio(e) {
        let gender = {};
        gender[e.target.value] = e.target.checked;
        this.setState({ gender: gender });
    }

    handleCheckbox(e) {
        let hobby = Object.assign(this.state.hobby);
        hobby[e.target.value] = e.target.checked;
        this.setState({ hobby: hobby });
    }

    handleSummit(e) {
        e.preventDefault();
        fetch(this.props.url, { method: "POST", body: JSON.stringify(this.state) }).then(res => {
            console.log(res);
        });
    }

    render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleSummit.bind(this) },
            React.createElement(
                "label",
                null,
                "Name"
            ),
            React.createElement("input", { type: "text", value: this.state.name, onChange: e => this.setState({ name: e.target.value }) }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("input", { type: "radio", name: "gender", value: "male", checked: this.state.gender['male'], onChange: this.handleRadio.bind(this) }),
            React.createElement(
                "label",
                null,
                "Male"
            ),
            React.createElement("input", { type: "radio", name: "gender", value: "female", checked: this.state.gender['female'], onChange: this.handleRadio.bind(this) }),
            React.createElement(
                "label",
                null,
                "Female"
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                "Hobby"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox", value: "game", checked: this.state.hobby.game, onChange: this.handleCheckbox.bind(this) }),
            React.createElement(
                "label",
                null,
                "Game"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox", value: "music", checked: this.state.hobby.music, onChange: this.handleCheckbox.bind(this) }),
            React.createElement(
                "label",
                null,
                "Music"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox", value: "movie", checked: this.state.hobby.movie, onChange: this.handleCheckbox.bind(this) }),
            React.createElement(
                "label",
                null,
                "Movie"
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                "Favorite Language"
            ),
            React.createElement("br", null),
            React.createElement(
                "select",
                { value: this.state.favoriteLanguage, onChange: e => this.setState({ favoriteLanguage: e.target.value }) },
                React.createElement(
                    "option",
                    { value: "C++" },
                    "C++"
                ),
                React.createElement(
                    "option",
                    { value: "Java" },
                    "Java"
                ),
                React.createElement(
                    "option",
                    { value: "Python" },
                    "Python"
                )
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                "Info"
            ),
            React.createElement("br", null),
            React.createElement("textarea", { name: "info", id: "", cols: "30", rows: "5", value: this.state.info, onChange: e => this.setState({ info: e.target.value }) }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("input", { type: "submit", value: "Submit" })
        );
    }
}

ReactDOM.render(React.createElement(Form, { url: "https://jsonplaceholder.typicode.com/posts" }), document.getElementById('content'));
