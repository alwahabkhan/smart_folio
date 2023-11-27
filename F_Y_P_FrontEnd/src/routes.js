import CreateResume from 'components/contactForm'
import Signup from 'views/signup'
import Login from 'views/login'
import Dashboard from 'views/dashboard'
const routes = [
    {
        name:'Create Resume',
        route:'/create-resume',
        component:<CreateResume />
    },
    {
        name:'Signup up',
        route:'/signup',
        component:<Signup />
    },
    {
        name:'Login',
        route:'/login',
        component:<Login />
    },
    {
        name:'Dashboard',
        route:'/',
        component:<Dashboard />
    },
]
export default routes;