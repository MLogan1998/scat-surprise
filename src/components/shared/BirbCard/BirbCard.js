import React from 'react';
import { Link } from 'react-router-dom';

import birbShape from '../../../helpers/props/birbShape';

import './BirbCard.scss';

class BirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;
    const singleLink = `/birbs/${birb.id}`;
    const editLink = `/edit/${birb.id}`;
    return (
      <div className="birbDiv">
      <div class="card">
      <div className="card-body">
        <h5 className="card-title">{birb.type}</h5>
        <p className="card-text">{birb.notes}</p>
        <Link to={singleLink}><i class="fas fa-binoculars"></i></Link>
        <Link to={editLink}><i class="fas fa-edit ml-2"></i></Link>
      </div>
      </div>
      </div>
    );
  }
}

export default BirbCard;
