import { Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Courses from './components/Courses';

function App() {
  return (
    <>
      <Navbar />
      <Row>
        <Col md={3} style={{position: 'sticky', top: '0px', left: '0px'}}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Courses />
        </Col>
      </Row>
    </>
  );
}

export default App;
