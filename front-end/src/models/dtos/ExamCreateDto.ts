import Invigilator from "../Invigilator";
import Student from "../Student";

class ExamCreateDto {
    // public title: string;
    // public type: string;
    // public subject: string;
    // public dateTime: string;
    // public locationId: number;
    // public duration: string;
    // public description: string;
    // public students: string[];
    // public invigilators: string[];

    constructor(public title: string, public type:string, public subject: string, public dateTime: string, public locationId: number, public duration: string, public description: string, public students: Student[], public invigilators: Invigilator[]) {

    }
}

export default ExamCreateDto;