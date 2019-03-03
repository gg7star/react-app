import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './faq.css'

class Faq extends Component {

  render() {
    return(
      <div className="faq-container">
        <Row className="pt-5">
          <Col sm="12">
            <h3><i className="icon-map" />FAQ</h3>
            <hr />
            <p>
              
            </p>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col sm="5" />
          <Col sm="2">
            <Link to="/home">
              <RaisedButton label="< Back" primary={true} fullWidth={true}/>
            </Link>
          </Col>
          <Col sm="5" />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
