const user = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  applications: [],
  isAdmin: false,
  isAuthenticated: false,
  token: ""
}


export const state = {
    companies: [],
    company: null,
    jobs: [],
    user,
    isLoading: false,
    error: null
  }