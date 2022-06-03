import axios from 'axios';

const EXAM_API_BASE_URL = "http://localhost:8081/exams/";

class ExamService {
	getExams(){
		return axios.get(EXAM_API_BASE_URL);
	}
	createExam(exam){
		return axios.post(EXAM_API_BASE_URL, exam);
	}
	getExamById(examId){
		return axios.get(EXAM_API_BASE_URL + '/' + examId)
	}

	updateExam(examId, exam){
		return axios.put(EXAM_API_BASE_URL + '/' + examId, exam);
    }

	//deleteStudent(studentId){
	//	return axios.delete(STUDENT_API_BASE_URL + '/'  + studentId);
	//}

}

export default new ExamService()