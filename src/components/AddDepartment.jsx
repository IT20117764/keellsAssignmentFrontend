import React,{useEffect, useState} from "react";
import axios from "axios";


function AddDepartment() {

    const [dName, setdName] = useState("");
    const [departmentList, setDepartmentList] = useState([])


    useEffect(()=>{

    },[])

    const BASE_URL = "https://localhost:44337/api/department";
    function addDepHandler(e){
        e.preventDefault();

        //Check empty inputs
        if(dName == ""){
            return alert("please fill the values");
        }

        const department = {DepartmentName:dName}
        axios.post(BASE_URL, department).then((res)=>{
            alert(res.data);
            dName = "";
        }).catch((err)=>{
            console.log(err);
            //alert(err);
        })
    }

    


    return (  
        <div className="container card mt-5 p-5">
            <h1 className="text-center">Add Department</h1>
            <div className="">
                <form className="" style={{width:"50%", margin:"auto"}}>
                    <div className="form-group">
                        <label>Departmet Name : </label>
                        <input type="text" className="form-control" value={dName} onChange={(e)=> setdName(e.target.value)} />
                    </div>
                    <div className="form-group">
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4" onClick={addDepHandler} >Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddDepartment;