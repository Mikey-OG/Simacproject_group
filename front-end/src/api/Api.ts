import axios from "axios";
import ExamCreateDto from "../models/dtos/ExamCreateDto.ts";


//get all students
export async function getAllStudents (){
    return await axios.get('http://localhost:8080/students')
}

//get all invigilators
export async function getAllInvigilators(){
    return await axios.get('http://localhost:8080/invigilators')
}

//get all locations
export async function getAllLocations(){
    return await axios.get('http://localhost:8080/locations')
}

//Create new exam
export async function createExam(examCreateDto: ExamCreateDto){
    return await axios.post('http://localhost:8080/exams', examCreateDto, {headers: {'Content-Type': 'application/json'}})
}