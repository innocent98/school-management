import { Model } from "mongoose"

type Semester_Session = {
    school: string
    academic_year:string
    semester?:string
    term?:string
    startDate?: Date
    endDate?: Date
}

type Semester_SessionModel = Model<Semester_Session>

declare const Semester_Session: Semester_SessionModel

export default Semester_Session