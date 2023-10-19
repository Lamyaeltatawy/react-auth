import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  if (mode !== 'login' && mode !== 'signUp') {
    throw json({ message: 'Invalid mode' })
  }

  const data = await request.formData();
  const url = 'http//localhost:5000';
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }
  const response = await fetch(url + '/auth' + mode, {
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData),

  });

  
  

  const resData = await response.json()
  const token = resData.token;
  localStorage.setItem('token',token)

  if (authData.email === 'admin'&& authData.password === 'passward') {
    localStorage.setItem('role', 'admin')
    return redirect('/admin');
  }else{
    localStorage.setItem('role', 'user')
  }

  if (!response.ok) {
    throw json({ message: 'Authentication failed' }, { status: 500 })
  }
}

