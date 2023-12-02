import CreateResume from 'components/contactForm'
import Signup from 'views/signup'
import Login from 'views/login'
import Dashboard from 'views/dashboard'
import Questionare from 'views/resumeQuestionare'
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
    {
        name:'Cover Letter',
        route:'/cover-letter',
        component:<Questionare />
    },
]
export default routes;