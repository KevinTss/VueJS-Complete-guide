import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import User from './components/user/User.vue'
import Header from './components/Header.vue'

export const routes = [
  { 
    name: 'home',
    path: '',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  { 
    path: '/user',
    components: {
      default: User,
      'header-top': Header
    },
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail,
        beforeEach: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: { name: 'home' }
  },
  { 
    path: '*',
    redirect: '/'
  }
]