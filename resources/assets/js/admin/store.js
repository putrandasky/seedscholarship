import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
// import router from './router/index';

Vue.use(Vuex);

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const USER_INFO = 'USER_INFO';
const TOKEN_CHECKED = 'TOKEN_CHECKED';
const LOGOUT = 'LOGOUT';
const LOADING = 'LOADING';
const LOADINGFULL = 'LOADINGFULL';
const LOADINGOVERLAY = 'LOADINGOVERLAY';
const BREADCRUMBDATA = 'BREADCRUMBDATA';

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!Cookies.get('token'),
    isLoggedOut: !Cookies.get('token'),
    token: Cookies.get('token'),
    sidebar: false,
    loading: false,
    loadingFull: false,
    loadingOverlay: false,
    sidebarData: {},
    linkBackButton: '',
    currentPageName: '',
    tokenChecked: false,
    user: {
      id: null,
      name: '',
      permissions: []
    }
    // [{
    //   name:'Piling',
    //   url:'tags/piling'
    // }, {
    //   name: 'Onshore',
    //   url: 'tags/onshore'
    // }, {
    //   name: 'Pipeline',
    //   url: 'tags/pipeline'
    // }, {
    //   name: 'Steel Structure',
    //   url: 'tags/steel-structure'
    // }],
  },
  mutations: {
    [LOGIN](state) {
      state.loading = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.isLoggedOut = false;
      state.loading = false;
      state.token = Cookies.get('token');
    },
    [USER_INFO](state, n) {
      state.user.id = n.id;
      state.user.name = n.name;
      state.user.permissions = n.permissions;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.token = '';
    },
    [TOKEN_CHECKED](state) {
      state.tokenChecked = true;
    },
    [LOADING](state, n) {
      state.loading = n;
    },
    [LOADINGFULL](state, n) {
      state.loadingFull = n;
    },
    [LOADINGOVERLAY](state, n) {
      state.loadingOverlay = n;
    },
    [BREADCRUMBDATA](state, n) {
      state.linkBackButton = n.linkBackButton;
      state.currentPageName = n.currentPageName;
    }
  },
  actions: {
    stateLoading({ commit }, isLoading) {
      commit(LOADING, isLoading);
    },
    stateLoadingFull({ commit }, isLoading) {
      commit(LOADINGFULL, isLoading);
    },
    storeBreadcrumbData({ commit }, data) {
      commit(BREADCRUMBDATA, data);
    },
    login({ commit }, creds) {
      commit(LOGIN); // show spinner
      let token = creds.access_token;
      let duration = creds.expires_in;
      let time = duration / 86400;

      Cookies.set('token', token, {
        expires: time
      });
      commit(LOGIN_SUCCESS);
    },
    logout({ commit }) {
      Cookies.remove('token');
      commit(LOGOUT);
    },
    //   checkProjectId({ commit }) {
    //    commit(PROJECTID);
    //  },

    checkToken({ commit, state }) {
      if (state.isLoggedIn && state.token) {
        axios
          .post('api/auth/admin/me', '')
          .then(response => {
            let user_info = {
              id: response.data.id,
              name: response.data.name,
              permissions: response.data.permissions
            };
            commit(USER_INFO, user_info);
            commit(TOKEN_CHECKED);

            // console.log(response.data);
          })
          .catch(error => {
            console.log(error);
            // console.log('not checked');
          });
      } else {
        commit(TOKEN_CHECKED);
      }
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },
    isLoggedOut: state => {
      return state.isLoggedOut;
    },
    token: state => {
      return state.token;
    },
    loading: state => {
      return state.loading;
    },

    user: state => {
      return state.user;
    }

    // checkToken: state=>{
    // 	  axios.post('/api/auth/admin/me','',
    // 	  	{headers:{'Authorization':'Bearer '+state.token}
    // })
    // .then(()=>{
    // 	return 'true';
    // });
    // // return 'false'
    // }
  }
});

// let tagName = ['piling', 'marine', 'piping']

// // function input(){
// //   for()
// // }
// let newTag = []

// function pushArray() {
//   for (let index = 0; index < tagName.length; index++) {
//     newTag.push({
//       name: 'tags/' + tagName[index],
//       id: index,
//     })

//   }
// }
// pushArray()
// console.log(newTag)
