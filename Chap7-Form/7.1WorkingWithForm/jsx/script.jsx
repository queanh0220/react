class Form extends React.Component {
    constructor(props) {
      super(props);    
      this.state = {
        name:"",
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
        info: "",
      };
     
    }

    handleRadio(e) {
        let gender = {}
        gender[e.target.value] = e.target.checked
        this.setState({gender: gender})
    }

    handleCheckbox(e) {
        let hobby = Object.assign(this.state.hobby)
        hobby[e.target.value] = e.target.checked
        this.setState({hobby: hobby})
    }

    handleSummit(e) {
        e.preventDefault()
        fetch(this.props.url, {method: "POST", body: JSON.stringify(this.state)})
        .then((res) => {console.log(res)})
    }

    
    
    render() {
      return (
        <form onSubmit={this.handleSummit.bind(this)}>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            <br/><br/>
            <input type="radio" name="gender" value="male" checked={this.state.gender['male']} onChange={this.handleRadio.bind(this)}/>
            <label>Male</label>
            <input type="radio" name="gender" value="female" checked={this.state.gender['female']} onChange={this.handleRadio.bind(this)}/>
            <label>Female</label>
            <br/><br/>
            <label>Hobby</label><br/>
            <input type="checkbox" value="game" checked={this.state.hobby.game} onChange={this.handleCheckbox.bind(this)}/>
            <label>Game</label><br/>
            <input type="checkbox" value="music" checked={this.state.hobby.music} onChange={this.handleCheckbox.bind(this)}/>
            <label>Music</label><br/>
            <input type="checkbox" value="movie" checked={this.state.hobby.movie} onChange={this.handleCheckbox.bind(this)}/>
            <label>Movie</label><br/>
            <br/>
            <label>Favorite Language</label><br/>
            <select value={this.state.favoriteLanguage} onChange={(e)=>this.setState({favoriteLanguage: e.target.value})}>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
            </select>
            <br/><br/>
            <label>Info</label><br/>
            <textarea name="info" id="" cols="30" rows="5" value={this.state.info} onChange={(e) => this.setState({info: e.target.value})}></textarea>
            <br/><br/>
            <input type="submit" value="Submit"/>
        </form>
      );
    }
  }

  ReactDOM.render(<Form url="https://jsonplaceholder.typicode.com/posts"/>, document.getElementById('content'));