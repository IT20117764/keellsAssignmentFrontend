// import React,{useEffect, useState} from "react";
// import axios from "axios";





// function Department() {

//     const[depList, setDepList] = useState([]);

//     const[selectedDep, setSelectedDep] = useState([]);

//     const[isVisible, setIsVisible] = useState(true);

//     const REAC_APP_API = "https://localhost:44337/api/department/";

//     useEffect(()=>{
//         let dep1 = {DepartmentId:1, DepartmentName:"SrE"}
//         let deps = [];
//         deps.push(dep1);

//         setDepList(deps);
//         axios.get("https://localhost:44337/api/department").then((res)=>{
//             setDepList(res.data);
//         }).catch((err)=>{
//             console.log(err);
//         })

//     },[])


//     function deleteDepHandler(id){
//         axios.delete(REAC_APP_API+"delete/"+id).then((res)=>{
//             alert("Employee deleted");
//             window.location.reload(false);
//         }).catch((err)=>{
//             alert(err);
//         })
//     }




//     return ( 
//         <div className="container card mt-5 p-5">
//             {isVisible == true &&
//             <table className="table table-light">
//                <thead>
//                    <tr>
//                        <th>depID</th>
//                        <th>Department Name</th>
                       
//                    </tr>
//                </thead>
//                <tbody>
//                     {depList.map(
//                         dep =>
//                         <tr key={dep.DepartmentId}>
//                             <td>{dep.DepartmentName}</td>
//                             <td>
//                                 <button className="btn btn-primary btn-sm" onClick={(e)=>{setSelectedDep(dep); setIsVisible(false)}} >Edit</button>
//                                 <button className="btn btn-primary btn-sm" onClick={deleteDepHandler(dep.DepartmentId)} >Delete</button>
//                             </td>
//                         </tr>
//                     )}
//                </tbody>
//             </table>
//             }

//             {/* {isVisible == false && <UpdateDeployee dep={selectedDep} setIsVisible={setIsVisible} />}             */}


//         </div>

//         )}



// export default Department;









