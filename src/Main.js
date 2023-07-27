   import Counter from "./Counters";
   import { useState } from "react";

   export default function Main ({users}){
    const [uid, setUID] = useState(0);
    function rotateUser (){ setUID(uid < users.length-1 ? uid+1:0);}
    return(
        <div>
            <Counter
                // key={users[uid]+uid}
                name= {users[uid]}
            />
            <br/>
            <button onClick={rotateUser} >Cycle</button>
        </div>
    )
   }

