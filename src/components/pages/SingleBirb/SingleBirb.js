import React from 'react';
import birbData from '../../../helpers/data/birbData';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birdId } = this.props.match.params;
    console.error(birdId);
    birbData.getBirbById(birdId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <h2>single birb</h2>
    );
  }
}

export default SingleBirb;
