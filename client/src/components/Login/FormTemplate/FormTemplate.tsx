import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../containers/Login/Login';
import { useLocation } from 'react-router-dom';

export default function FormContainer(props: any): JSX.Element {
  const path: string = useLocation().pathname;
  return (
    <Login>
      <div className="form-template">
        <ul className="form-nav">
          <Link to="/login" className={path === '/login' ? 'active-link' : 'link'}>
            Log in
          </Link>
          <Link to="/register" className={path === '/register' ? 'active-link' : 'link'}>
            Register
          </Link>
        </ul>
        {props.children}
      </div>
    </Login>
  );
}
