import "../styles/Navbar.css"
import { LayoutDashboard, Building2, HousePlus, Calendar, User, Settings, Grid } from "lucide-react";
export const Navbar = () => {
  return (
    <div className="navbar">

        <div className="navbar-topcard">

      <h2 style={{color: 'purple'}} className="navbar-title">Calabar Homes</h2>
      <p className="navbar-subtitle">Landlord</p>
        </div>

        <div>
            <NavbarLink text="Overview"  icon={ <LayoutDashboard/> } />
            <NavbarLink text="My Properties" icon={ <Building2/> } />
            <NavbarLink text="Add Property" icon={ <HousePlus/> } />
            <NavbarLink text="Enquiries" icon={ <Calendar/> } />
            <NavbarLink text="Settings" icon={ <Settings/> }/>
            <NavbarLink text="Profile" icon={ <User/> } />
        </div>
    </div>
  )
}

export const NavbarLink =({text, icon}) => {
    return (
        <div className="navbar-link">
            <div className="navbar-link-icon">
                {icon}
            </div>
            <span>{text}</span>
        </div>
    )
}
