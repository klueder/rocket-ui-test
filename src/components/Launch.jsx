import React from 'react';
import PropTypes from 'prop-types';

const Launch = class extends React.PureComponent {

  render() {

    const Button = ({ launch }) => <Button>{launch}</Button>;

    Button.propTypes = {
      launch: PropTypes.node,
    };

    return (
      <li>
        <p>{Button}</p>
        <h2> { Button.mission_name } </h2>
        <div> Flight Number: { Button.flight_number } </div>
      </li>
    );
  }
}



export default Launch;
