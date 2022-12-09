import { Outlet, Link } from "react-router-dom";
import { ADMIN} from "../helpers/protect";


function navbar() {
  const Role = localStorage.getItem("role")
  const handlelogout=()=>{
    localStorage.removeItem("role");
    window.location.replace("/login");
  }
  return (
    
    <>
      <nav>
        <div className="logo">java</div>    
        <input type="checkbox" id="checkbox"></input>
        <label for="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul>
          {Role?
            <li><a href="#" class="active"onClick={handlelogout}>logout</a></li>
            :null}  
            {ADMIN(Role) && (
              <>
              <li><a href="#"><Link to='/Table'>user roles</Link></a></li>
               <li><a href="#"><Link to='/patientxlsx'>patient illness</Link></a></li>
               <li><a href="#"><Link to='/physicianclx'>physician mission</Link></a></li>
               <li ><a href="#"><Link to='/pharmaxlsx'>most bought drugs</Link></a></li>
               </>
            )}
               
        </ul>
    </nav>
     <Outlet />
     </>
  );
}

export default navbar;