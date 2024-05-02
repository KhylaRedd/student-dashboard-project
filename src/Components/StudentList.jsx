import "./StudentList.css";
import Student from "./Student";
import Data from "./d.json"



const StudentList = ({cohort}) => {
    return (
        <main className="StudentList">
           
           {Data.map(student => {
            return <Student student={student} key={student.id}/>
           })}
        </main>
    )
}

export default StudentList;