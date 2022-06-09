import React,{useEffect, useState} from "react";
import axios from "axios";
import UpdateEmployee from "./UpdateEmployee";

function Employees() {

    const [departmentList, setDepartmentList] = useState([])
    const[empList, setEmpList] = useState([]);

    const[selectedEmp, setSelectedEmp] = useState([]);

    const[isVisible, setIsVisible] = useState(true);

    const BASE_URL = "https://localhost:44337/api/employee";

    useEffect(()=>{
        //let emp1 = {EmployeetId:1, FirtName:"Tharuka", LastName:"Dilsan", Email:"test@gmail.com", DateOfBirth:"12-12-1999", Age:24, Salary:12500, Department:"2"}
        //let emps = [];
        //emps.push(emp1);
        //setEmpList(emps);

        axios.get(BASE_URL).then((res)=>{
            setEmpList(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        axios.get("https://localhost:44337/api/department/").then((res)=> {
            setDepartmentList(res.data);
        })

    },[])


    function deleteEmpHandler(id){
        axios.delete(BASE_URL+ '/'+ id).then((res)=>{
            alert("Employee deleted");
            window.location.reload(false);
        }).catch((err)=>{
            alert(err);
        })
    }

    return ( 
        <div className="container card mt-5 p-5">
            <ul>
                {departmentList.map(d => 
                    <li>{d.DepartmentId} <span>:</span> {d.DepartmentName}</li>
                    )}
            </ul>
            {isVisible == true &&
            
            <table className="table table-light">
               <thead>
                   <tr>
                       <th>empID</th>
                       <th>FirstName</th>
                       <th>LastName</th>
                       <th>Email</th>
                       <th>Date of Birth</th>
                       <th>Age</th>
                       <th>Salary</th>
                       <th>Department</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                    {empList.map(
                        emp =>
                        <tr key={emp.EmployeetId}>
                            <td>{emp.EmployeetId}</td>
                            <td>{emp.FirtName}</td>
                            <td>{emp.LastName}</td>
                            <td>{emp.Email}</td>
                            <td>{emp.DateOfBirth}</td>
                            <td>{emp.Age}</td>
                            <td>{emp.Salary}</td>
                            <td>{emp.Department}</td>
                            <td>
                                <button className="btn btn-primary btn-sm" onClick={(e)=>{setSelectedEmp(emp); setIsVisible(false)}} >Edit</button>
                                <button className="btn btn-primary btn-sm" onClick={(e)=>deleteEmpHandler(emp.EmployeetId)} >Delete</button>
                            </td>
                        </tr>
                    )}
               </tbody>
            </table>
            }

            {isVisible == false && <UpdateEmployee emp={selectedEmp} setIsVisible={setIsVisible} />}            


        </div>
     );
}

export default Employees;
