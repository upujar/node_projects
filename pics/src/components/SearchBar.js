import React from 'react';

class SearchBar extends React.Component {

  state = {term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
   // console.log(this.state.term);//is undefined as this callback function doesnt understand this. Solution, binding or arrow funcion
    this.props.onSubmit(this.state.term)
  }
//parenthesis are ignored so that this method is calld in the future.
  //why this was done in controlled elements, 83
  render() {
    return (
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input type="text" value={this.state.term}
                     onChange={(e) => this.setState({term: e.target.value})}/>

            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;