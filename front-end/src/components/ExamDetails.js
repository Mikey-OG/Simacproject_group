import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col,Accordion,Table,Row,ListGroup } from "react-bootstrap";
import {Input} from "reactstrap";

function ExamDetails({}) {
    const [exams, setExams] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    useEffect(() => {
      const fetchExams = async () => {
        
       //  let param = window.location.pathname;
        // let id = param.split('/').pop();
        const res = await fetch(`http://localhost:8081/exams/`)
        const data = await res.json()
        console.log('data in fetch method',data)
        console.log('exam in fetch method',exams)
        return data
      }
      const getExams = async () =>{
        const examFromServer = await fetchExams()
        setExams(examFromServer)
        console.log('exam in fetch useeffect',exams)
     
      
      } 
      
      getExams()
     
      },[exams])
     return (<div>
        <Row>
        <Input className="search-input" type="text" placeholder="Seach Exam by Title..." onChange={e=>setSearchTerm(e.target.value)} />
      {exams.filter((exam)=>{
        if(searchTerm == ""){
          return exam
        }
        else if(exam.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return exam;
        }
         })
          .map((exam,key)=>{
            console.log('exam afteer map is',exam);
            return   <Col  className='exam1' md={4} lg={5}>
        <Card bg={'light'}  border="primary"  text={'dark'} style={{ width: '50rem' }}>
        <Card.Header >
        <Card.Title  >  {exam.title} </Card.Title>
        </Card.Header>
      <Card.Body>
     <Card.Text>
     <ListGroup variant="flush">
    <ListGroup.Item> Id: {exam.id}</ListGroup.Item>
    <ListGroup.Item>Type: {exam.type}</ListGroup.Item>
    <ListGroup.Item> Subject: {exam.subject}</ListGroup.Item>
    <ListGroup.Item>Exam Time: {exam.dateTime}</ListGroup.Item>
    <ListGroup.Item> Duration: {exam.duration}</ListGroup.Item>
    <ListGroup.Item> Description: {exam.description}</ListGroup.Item>

  </ListGroup>
    </Card.Text>
    <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Students</Accordion.Header>
                    <Accordion.Body>
                    <Table striped bordered hover variant="dark">
                    <thead>
                     <tr>
                    <th>#</th>
                   <th>Student</th>
                   <th>Email</th>
                   <th>DoB</th>
                   <th>Phone Number</th>
                  </tr>
                </thead>
                 <tbody>
                 {exam.students.map((stu, key) => {
                      return (
                        <tr>
                      <td>{stu.id}</td>
                      <td> {stu.name}</td>
                      <td> {stu.email}</td>
                      <td> {stu.dob}</td>
                      <td> {stu.phonenumber}</td>
                      </tr>
                    );
                    })}
             </tbody>
            </Table>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Invigilators</Accordion.Header>
                    <Accordion.Body>
                    <Table striped bordered hover variant="dark">
                    <thead>
                     <tr>
                    <th>#</th>
                   <th>Invigilator</th>
                   <th>Email</th>
                   <th>DoB</th>
                   <th>Phone Number</th>
                  </tr>
                </thead>
                 <tbody>
                 {exam.invigilators.map((inv, key) => {
                      return (
                        <tr>
                      <td>{inv.id}</td>
                      <td> {inv.name}</td>
                      <td> {inv.email}</td>
                      <td> {inv.dob}</td>
                      <td> {inv.phonenumber}</td>
                      </tr>
                    );
                    })}
             </tbody>
            </Table>
                   
                 
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                   
                    </Card.Body>
                    <Card.Footer > <Link to={`/editexam/${exam.id}`}> 
                    <Button variant="primary" size="lg">Edit</Button>
                    </Link></Card.Footer>
        </Card>
            </Col> 

           
          })}
          </Row>
     </div>
  
   

     )
     }
   

export default ExamDetails;
