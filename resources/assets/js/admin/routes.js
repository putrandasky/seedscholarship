

import Login  from './components/auth/AuthLogin.vue';
import AuthApp  from './components/auth/AuthApp.vue';




export default [
			{path:'/', name:'app',component: AuthApp},
			{path:'/login', name:'login',component: Login}

]

