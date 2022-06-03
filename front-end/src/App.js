import logo from './logo.svg';
import './App.css';
import ExamList from "./components/ExamList";
import Examstable from './components/Examstable';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateExamComponent from './components/CreateExam';
import ExamFormContainer from './components/exam_form/ExamFormContainer.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ExamList></ExamList>
      // <ExamFormContainer></ExamFormContainer>
    // <div className="App">
    //   <header className="App-header">
        
    //     <p>
    //         Exams Dashboard
    //     </p>
       
    //     <Examstable></Examstable>   
    //   </header>
    // </div>
    
  );
}

export default App;
