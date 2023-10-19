import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
// import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root')
  return (
    <header className={classes.header}>
      <nav className={classes.container}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <i class="bi bi-brightness-high"></i> Bright vision
            </NavLink>
          </li>
          {token && (<li>
            <Form action='/logout' method='post'>
              <button>logout</button>
            </Form>
          </li>)}

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
