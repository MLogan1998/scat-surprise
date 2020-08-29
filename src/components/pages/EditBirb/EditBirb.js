import React from 'react';

class EditBirb extends React.Component {
  render() {
    const { birdId } = this.props.match.params;
    return (
      <h2>you are editing {birdId}</h2>
    );
  }
}

export default EditBirb;
