import React from 'react'
import { useAppSelector } from './store';

const List=()=>
{
    const person=useAppSelector(state=>state.person.persons)
    console.log(person)
    return(
 <>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            {person.map(persons=>(
                <tr key={persons.id}>

                   <td>{persons.name}</td>
                </tr>
            ))}
        </tbody>
     </table> 
 </>

    )
}

export default List;