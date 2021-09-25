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
    filteredCompanies: [],
    company: null,
    jobs: [],
    filteredJobs: [],
    user,
    isLoading: false,
    error: null
  }