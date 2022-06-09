import React,{Component} from 'react';


export default class Department extends Component{


    constructor(props){
        super(props);
        this.state={deps:[]}
    }
    
    
    refreshList(){
        fetch("https://localhost:44337/"+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
    
    componentDidMount(){
        this.refreshList();
    }
    
    componentDidUpdate(){
        this.refreshList();
    }
    
    
    render(){
        const {deps} = this.state;
        return ( 
            <div >
            
        <table className="table table-light">
            <thead>
                <tr>
                    <th>DepartmentId</th>
                <th>DepartmentName</th>
                </tr>
            </thead>
            <tbody>
                {deps.map(dep=>
                    <tr key={dep.DepartmentId}>
                        <td>{dep.DepartmentId}</td>
                        <td>{dep.DepartmentName}</td>
                        <td></td>
                    </tr>)}
                     </tbody>
                </table>
        </div>
        
        
        );
    
        
        }
    }