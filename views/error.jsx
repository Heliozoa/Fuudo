var React = require('react');
 
class ErrorMessage extends React.Component {
  render() {
    return (
      <div>
        {this.props.error.name} <br/>
        {this.props.error.message} <br/>
      </div>
    );
  }
};
 
module.exports = ErrorMessage;