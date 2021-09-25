import * as axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001';

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

const applyToJob = async (application) => {
  console.log('e', application)
  const { username, jobId, token } = application

  const result = await axios.post(`/users/${username}/jobs/${jobId}`, null, {
    headers: {
      Authorization: token
    }
  })

  return result.data
}


export const api = {
  login,
  register,
  getCurrentUser,
  patchCurrentUser,
  getUsers,
  getCompanies,
  getCompanyByHandle,
  getJobs,
  applyToJob
}