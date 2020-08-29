import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editBirdEvent= (e) => {
    e.preventDefault();
    const birdId = 'bird20';
    this.props.history.push(`/edit/${birdId}`);
  }

  render() {
    return (
      <div>
      <h4>Home</h4>
      <button className="btn btn-primary" onClick={this.editBirdEvent}>Edit Bird</button>
      <Link to='/new'>New Bird</Link>
      </div>
    );
  }
}

export default Home;
