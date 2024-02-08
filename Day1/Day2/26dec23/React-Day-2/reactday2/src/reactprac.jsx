import { useState } from "react";
function Search()
{
    const [ searchtext,setsearchtext]=useState('');

    const handlechange = (event) =>{
        setsearchtext(event.target.value);
        console.log("search Text : ", searchtext);
    }
    return (
        <div>
            <h1>search teatx</h1>
            <label htmlFor="search" onchange={handlechange} />
            <p>
                searching for   <strong> {searchtext} </strong>
            </p>
        </div>
    )
}
export default Search