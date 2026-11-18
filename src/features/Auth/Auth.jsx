import { Outlet } from 'react-router'
import "./styles/Auth.css";

export const Auth = () => {
  return (
      <div className="auth-container">
  <Outlet />
</div>
  )
}
