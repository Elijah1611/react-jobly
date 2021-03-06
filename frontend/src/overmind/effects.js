import * as axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const login = async (data) => {
    const result = await axios.post('/auth/token', data)
    return result.data.token
}

const register = async (data) => {
  const result = await axios.post('/auth/register', data)
  return result.data.token
}

const getCurrentUser = async (username, token) => {
  const result = await axios.get(`/users/${username}`, {
    headers: {
      Authorization: token
    }
  })
  return result.data.user
}

const patchCurrentUser = async (username, token, updateData) => {
  const result = await axios.patch(`/users/${username}`, updateData, {
    headers: {
      Authorization: token
    }
  })
  return result.data.user
}

const getUsers = async (token) => {
  const result = await axios.get('/users', {
    headers: {
      Authorization: token
    }
  })
  return result.data.users
}

const getCompanies = async () => {
    const result = await axios.get('/companies')
    return result.data.companies
}

const getCompanyByHandle = async (handle) => {
  const result = await axios.get(`/companies/${handle}`)
  return result.data.company
}

const getJobs = async () => {
  const result = await axios.get('/jobs')
  return result.data.jobs
}

const applyToJob = async ({ username, jobId, token }) => {

  const result = await axios.post(`/users/${username}/jobs/${jobId}`, null, {
    headers: {
      Authorization: token
    }
  })

  return result.data
}

const searchJobs = async (title) => {
  const result = await axios.get(`/jobs`, {
    params: {
      title
    }
  })

  return result.data.jobs
}

const searchCompanies = async (name) => {
  const result = await axios.get(`/companies`, {
    params: {
      name
    }
  })

  return result.data.companies
}

export const api = {
  login,
  register,
  getCurrentUser,
  patchCurrentUser,
  getUsers,
  getCompanies,
  getCompanyByHandle,
  searchCompanies,
  getJobs,
  applyToJob,
  searchJobs
}