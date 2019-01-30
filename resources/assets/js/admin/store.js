import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from "js-cookie";
// import router from './router/index';

Vue.use(Vuex);

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const USER_INFO = "USER_INFO";
const LOGOUT = "LOGOUT";
const LOADING = "LOADING";
const LOADINGOVERLAY = "LOADINGOVERLAY";
const PROJECTID = "PROJECTID";
const TAGSIDEBAR = "TAGSIDEBAR";
const PROJECT = "PROJECT";
const TOTALSIDEBAR = "TOTALSIDEBAR";
const SIDEBARDATA = "SIDEBARDATA";

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!Cookies.get("token"),
    isLoggedOut: !Cookies.get("token"),
    token: Cookies.get("token"),
    sidebar: false,
    loading: false,
    loadingOverlay: false,
    currentProjectId: '',
    tagSidebar: '',
    project: '',
    totalSidebar: '',
    sidebarData:{},
    user: {
      id: null,
      name: '',
      superAdmin: false,
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
    [PROJECTID](state) {
      state.currentProjectId = state.route.params.id;

    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.isLoggedOut = false;
      state.loading = false;
      state.token = Cookies.get("token");
    },
    [USER_INFO](state, n) {
      state.user.id = n.id;
      state.user.name = n.name;
      state.user.superAdmin = n.super_admin;
      state.user.permissions = n.permissions;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.token = '';
    },
    [LOADING](state, n) {
      state.loading = n;
    },
    [TAGSIDEBAR](state, n) {
      state.tagSidebar = n;
    },
    [PROJECT](state, n) {
      state.project = n;
    },
    [TOTALSIDEBAR](state, n) {
      state.totalSidebar = n;
    },
    [SIDEBARDATA](state, n) {
      state.sidebarData = n;
    },
    [LOADINGOVERLAY](state, n) {
      state.loadingOverlay = n;
    }
  },
  actions: {
    stateLoading({
      commit
    }, isLoading) {
      commit(LOADING, isLoading)
    },
    login({
      commit
    }, creds) {
      commit(LOGIN); // show spinner
      let token = creds.access_token;
      let duration = creds.expires_in;
      let time = duration / 86400;

      Cookies.set("token", token, {
        expires: time
      });
      commit(LOGIN_SUCCESS);

    },
    logout({
      commit
    }) {
      Cookies.remove("token");
      commit(LOGOUT);
    },
    //   checkProjectId({ commit }) {
    //    commit(PROJECTID);
    //  },
    getProject({
      commit,
      state
    }) {
      axios.get('api/project/' + state.route.params.projectId)
        .then((response) => {
          // console.log('getProject');
          commit(PROJECT, response.data);

        })
        .catch((error) => {
          console.log(error);
          // console.log('not checked');
        })
    },
    getSidebarData({
      commit,
      state
    }) {
      axios.get('api/project/' + state.route.params.projectId + '/sidebar')
        .then((response) => {
          // console.log(response.data);
          const editTags = (tags) => {
            return tags.map(item => {
              var temp = Object.assign({}, item);
              temp['url'] = '/project/' + state.route.params.projectId + '/tag/' + temp.name
              temp['badge'] = {
                variant: 'danger',
                text: temp.contents_count
              }
              // temp.name = 'my name '+temp.name;
              return temp;
            });
          }
          const editCategory = (category) => {
            return category.map(item => {
              var temp = Object.assign({}, item);
              temp['url'] = '/project/' + state.route.params.projectId + '/content/category/' + temp.id,
              temp['badge'] = {
                variant: 'danger',
                text: temp.contents_count
              }
              // temp.name = 'my name '+temp.name;
              return temp;
            });
          }
          let data = {
            ['categories'] : editCategory(response.data.category),
            ['tags']: editTags(response.data.tag),
            ['claim']: response.data.claim
          }
          console.log(data);
          
          commit(SIDEBARDATA, data);

        })
        .catch((error) => {
          console.log(error);
          // console.log('not checked');
        })
    },
    getTags({
      commit,
      state
    }) {
      axios.get('api/project/' + state.route.params.projectId + '/tag')
        .then((response) => {
          // console.log(response.data)
          const editTags = (tags) => {
            return tags.map(item => {
              var temp = Object.assign({}, item);
              temp['url'] = '/project/' + state.route.params.projectId + '/tag/' + temp.name
              temp['badge'] = {
                variant: 'danger',
                text: temp.contents_count
              }
              // temp.name = 'my name '+temp.name;
              return temp;
            });
          }
          let updateTags = editTags(response.data)
          commit(TAGSIDEBAR, updateTags)
          // console.log(updateTags);

        })
        .catch((error) => {
          console.log(error);
        })
    },
    checkToken({commit,state}) {
      if (state.isLoggedIn && state.token) {
        axios.post('api/me', '')
          .then((response) => {
            let user_info = {
              id: response.data.id,
              name: response.data.name,
              super_admin: response.data.super_admin,
              permissions: response.data.permissions
            }
            commit(USER_INFO, user_info);
            // console.log(response.data);
            console.log(response.data);
            
          })
          .catch((error) => {
            console.log(error);
            // console.log('not checked');
          })
      }
    }
  },
  getters: {
    isLoggedIn: state => {

      return state.isLoggedIn
    },
    isLoggedOut: state => {
      return state.isLoggedOut
    },
    token: state => {
      return state.token
    },
    loading: state => {
      return state.loading
    },
    sidebar: state => {
      return state.sidebar
    },
    tagSidebar: state => {
      return state.tagSidebar
    },
    currentProjectId: state => {
      return state.route.params.projectId
    },
    currentProject: state => {
      return state.project
    },
    user: state => {
      return state.user
    },

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