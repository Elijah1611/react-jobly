export const login = async ({ state, effects }, info) => {
    try {
        state.user.token = await effects.api.login(info)
        window.localStorage.setItem('token', state.user.token)
        window.localStorage.setItem('username', info.username)
    } catch (error) {
        state.error = error
    }
}

export const register = async ({ state, effects }, info) => {
    try {
        state.user.token = await effects.api.register(info)
        window.localStorage.setItem('token', state.user.token)
        window.localStorage.setItem('username', info.username)
    } catch (error) {
        state.error = error
    }
}

export const getUser = async ({ state, effects }) => {
    state.user.token = window.localStorage.getItem('token')
    state.user.username = window.localStorage.getItem('username')

    const currentUser = await effects.api.getCurrentUser(state.user.username, state.user.token)
    state.user.isAuthenticated = true
    state.user = { ...state.user, ...currentUser }
}

export const updateUser = async ({state, effects}, updateData) => {
    try {
        const updatedCurrentUser = await effects.api.patchCurrentUser(state.user.username, state.user.token, updateData)
        state.user = { ...state.user, ...updatedCurrentUser }
    } catch (error) {
        state.error = error
    }
}

export const logout = ({ state }) => {
    state.user.isAuthenticated = false
    state.user.token = ''

    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
}

export const getCompanies = async ({ state, effects }) => {
    state.companies = await effects.api.getCompanies()
}

export const getCompanyByHandle = async ({ state, effects }, handle) => {
    state.company = await effects.api.getCompanyByHandle(handle)
}

export const getJobs = async ({ state, effects }) => {
    state.jobs = await effects.api.getJobs()
}

export const applyToJob = async ({ state, effects }, application) => {
   await effects.api.applyToJob({ ...application, token: state.user.token })
}

export const searchJobs = async ({ state, effects }, title) => {
    state.filteredJobs = await effects.api.searchJobs(title)
}

export const clearSearchedJobs = ({ state }) => {
    state.filteredJobs = []
}

export const searchCompanies = async ({ state, effects }, name) => {
    state.filteredCompanies = await effects.api.searchCompanies(name)
}

export const clearSearchedCompanies = ({ state }) => {
    state.filteredCompanies = []
}

export const setGlobalError = ({ state }, error) => {
    state.error = error
}