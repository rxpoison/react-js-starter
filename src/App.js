import 'bootstrap/dist/css/bootstrap.min.css';
import BasicState from './tutorial/BasicState'
import { Row, Col } from 'reactstrap';

const App = () => {
  return (
    <div className="my-5 container">
      <Row>
        <Col xl={12} md={12} sm={12} >
          <BasicState />
        </Col>
       
      </Row>
    
    </div>
  );
}

export default App;
