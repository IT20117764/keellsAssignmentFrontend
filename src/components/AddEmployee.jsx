import React,{useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";


function Register() {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    const [departmentList, setDepartmentList] = useState([])


    useEffect(()=>{
        axios.get("https://localhost:44337/api/department/").then((res)=> {
            setDepartmentList(res.data);
        })
    },[])

    const BASE_URL = "https://localhost:44337/api/employee/";

    function addEmpHandler(e){

        e.preventDefault();

        //Check empty inputs
        if(fName == "" || lName == "" || email =="" || dateOfBirth=="" || age=="" || salary=="" || department==""){
            return alert("please fill the values");
        }


        //Check numaric values
        if(isNaN(salary)){
            return alert("please enter a valid values")
        } 

        const employee = {FirstName: fName , LastName: lName, Email: email, DateOfBirth:dateOfBirth,Age: age, Salary: salary, Department: department}
        //const employee = {FirstName: 'ww' , LastName: 'lName', Email: 'email', DateOfBirth:'1999-09-08',Age: 5, Salary: 5000, Department: 2}
        //const employee = {fName, lName, email, dateOfBirth, age, salary, department}

        axios.post("https://localhost:44337/api/employee/", employee).then((res)=>{
            alert(res.data);
            fName = "";
            lName = "";
            email = "";
            dateOfBirth = "";
            age = "";
            salary = "";
            department = "";
        }).catch((err)=>{
           console.log(err);
        })
    }

    function ageCalc(date){
        let today = moment(new Date()).format('YYYY-MM-DD')
        let empAge = (Date.parse(today) - Date.parse(date))/(86400000 * 365);
        setAge(Math.round(empAge));
    }

    
    return (  
        <div className="container card mt-5 p-5">
            <h1 className="text-center">Add Employee</h1>
            <div className="">
                <form className="" style={{width:"50%", margin:"auto"}}>
                    <div className="form-group">
                        <label>First Name : </label>
                        <input type="text" className="form-control" value={fName} onChange={(e)=> setFname(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input type="text" className="form-control" value={lName} onChange={(e)=> setLname(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth : </label>
                        <input type="date" className="form-control" value={dateOfBirth} onChange={(e)=> {setDateOfBirth(e.target.value); ageCalc(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Age : </label>
                        <input type="text" className="form-control" readOnly value={age} />
                    </div>
                    <div className="form-group">
                        <label>Salary : </label>
                        <input type="text" className="form-control" value={salary} onChange={(e)=> setSalary(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Department :  </label>
                       
                        <select className="form-control" value={department} onChange={(e)=> setDepartment(e.target.value)}>
                        <option>Select the Department</option>
                            {departmentList.map(
                                d=> <option value={d.DepartmentId}>{d.DepartmentName}</option>
                            )}
                            
                            
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4" onClick={addEmpHandler} >ADD Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;