// import React from "react";
// class funComp extends React.Component{
//     name='darshan'
//     salary=1000000
//     employee={name:'kumara',Loc:'Davanagere'}
//     color=['Black','Red','white']
//     render(){
//         return <nav>
//             <h1>Name:{this.name}</h1>
//             <h2>Salary:{this.salary}</h2>
//             <h3>Employee Name:{this.employee.name}</h3>
//             <h4>Employee Location: {this.employee.Loc}</h4>
//             <h5>Employee Color:{this.color[1]}</h5>
        
        
//         </nav>
//     }
// }
// export default funComp;

function FunComp(){
    let Name='Darshan'
    let Age = 23
    let Salary=100000
    let Employee={Name:'kumar',Loc:'Davanagere'}
    let Color=['black','red','white']
    return <nav>
        <h1>Name:{Name}</h1>
        <h2>Age :{Age}</h2>
        <h3>Salary:{Salary}</h3>
        <h4>Employee Name:{Employee.Name}</h4>
        <h5>Employee Location:{Employee.Loc}</h5>
        <h6>Employee color:{Color[1]}</h6>
    </nav>

}
export default FunComp