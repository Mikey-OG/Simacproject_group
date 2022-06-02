class ExamCreateDto {
    title: string;
    type: string;
    subject: string;
    public dateTime: string;
    locationId: number;
    duration: string;
    description: string;
    students: string[];
    invigilators: string[];

    // constructor(title: string, type:string, subject: string, dateTime: string, locationId: number, duration: string, description: string, students: string[], invigilators: string[]) {

    // }
}

export default ExamCreateDto;