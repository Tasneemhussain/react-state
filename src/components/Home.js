import NameTag from "./NameTag";
import { useState } from "react";

const initName= [
    {firstName : "Tasneem", lastName: "Hussain"},
    {firstName : "sasneem", lastName: "Hussain"},
    {firstName : "yasneem", lastName: "Hussain"},
    {firstName : "nasneem", lastName: "Hussain"},
 
]

const Home = () => {
    const [name,setName] = useState( [
    ]);
    const [firstName,setFirstName]= useState ("");
    const [lastName,setLastName]= useState ("");
    const AddName = () => {
        setName((name) => [...name,{firstName: firstName ,lastName:lastName}])
        setFirstName("")
        setLastName("")
    }
    

    return (
        <div
        style = {{
            display: "flex",
            justifycontent: "center",
            alignItems: "center",
            flexDirection: "column",
            }}
        >
            <h1>Complex state in React</h1>
            <input type="text" placeholder="firstname" value= {firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
            <input type="text" placeholder="lastname" value= {lastName} onChange={(e)=>{setLastName(e.target.value)}} />
            <button onClick={()=>{AddName ()}}>Add name</button>
            {name.map((p,i)=> {
                return (
                <NameTag key={i} firstName={p.firstName} lastName={p.lastName} />                
                );
          })}
                
           
            </div>
    );
}; 

export default Home;