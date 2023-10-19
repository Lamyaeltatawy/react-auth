import { Link } from 'react-router-dom';
import PageContent from '../components/PageContent';
import Card from '../components/card';
// import { useRouteLoaderData } from 'react-router-dom';
function HomePage() {
  // const token = useRouteLoaderData('root');
  const userRole = localStorage.getItem('role');

  return (
    <PageContent title="Welcome page !">
      <button><Link to="/auth">let's start</Link></button>
      {userRole === 'admin' && (<Card Title='admin view' />)}
      {userRole === 'admin' && (<Card Title='user view' />)}
      {userRole === 'admin' | 'user' && (<Card Title='admin,user view' />)}


    </PageContent>
  );
}

export default HomePage;
