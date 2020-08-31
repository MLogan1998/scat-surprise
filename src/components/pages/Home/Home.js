import React from 'react';
import birbData from '../../../helpers/data/birbData';
import authData from '../../../helpers/data/authData';
import BirbCard from '../../shared/BirbCard/BirbCard';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  componentDidMount() {
    birbData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error(err));
  }

  render() {
    const { birbs } = this.state;
    const birbcards = birbs.map((birb) => <BirbCard key={birb.id}/>);
    return (
      <div>
        { birbcards }
      </div>
    );
  }
}

export default Home;
