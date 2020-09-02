import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';
import birbData from '../../../helpers/data/birbData';

class NewBirb extends React.Component {
state = {
  type: '',
  color: '',
  size: '',
  seenAt: new Date(),
  altColor: '',
  wasSleeping: true,
  location: '',
  notes: '',
}

changeTypeEvent = (e) => {
  e.preventDefault();
  this.setState({ type: e.target.value });
}

seenAtEvent = (seenAt) => {
  this.setState({ seenAt });
}

saveBirb = (e) => {
  e.preventDefault();
  const keysIWant = [
    'type',
    'color',
    'size',
    'seenAt',
    'altColor',
    'wasSleeping',
    'location',
    'notes',
  ];
  const newBirb = _.pick(this.state, keysIWant);
  newBirb.uid = authData.getUid();

  birbData.saveNewBird(newBirb)
    .then((res) => {
      this.props.history.push(`/birbs/${res.data.name}`);
    })
    .catch((err) => console.error(err));
}

render() {
  const { type } = this.state;
  return (
      <div>
        <h2>new birb</h2>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="birbType">Type</label>
            <input type="text" className="form-control" id="birbType" placeholder="Enter Birb Type" value= {type} onChange={this.changeTypeEvent}></input>
          </div>
          <div className="form-group">
            <label htmlFor="birbSeenAt">Seen At:</label>
            <DatePicker
            selected={this.state.seenAt}
            onChange={this.seenAtEvent}
            />
          </div>
          <button className="btn btn-secondary" onClick={this.saveBirb}>Submit</button>
        </form>
      </div>
  );
}
}

export default NewBirb;
