import logo from './logo.svg';
import './App.css';
import Examstable from './components/Examstable';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateExamComponent from './components/CreateExam';
import ExamFormContainer from './components/exam_form/ExamFormContainer.tsx';

function App() {
  return (
    <ExamFormContainer></ExamFormContainer>
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
