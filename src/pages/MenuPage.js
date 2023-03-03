import { useEffect } from "react"
import { menu } from "../api";
import "./MenuPage.css";
export default function MenuPage(){
    useEffect(()=>{
       // using api but i didn't find api for food
    },[])
    return (<div className="table-container">
        <table className="table">
            <thead>
                <th style={{width:"50px"}}></th>
                <th>Name</th>
                <th>Price</th>
              
            </thead>
            <tbody>
                {menu.map(a=>(
                    <tr>
                        <td> 
                            <img  width={150} src={a.image} alt={a.name} />
                        </td>
                        <td>{a.name}</td>
                        <td>{a.price}$ </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}