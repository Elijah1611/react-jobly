export const login = async ({ state, effects }, info) => {
    try {
        state.user.token = await effects.api.login(info)
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

export const logout = ({ state }) => {
    state.user.isAuthenticated = false
    state.user.token = ''

    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
}

export const getCompanies = async ({ state, effects }) => {
    state.companies = await effects.api.getCompanies()
}

export const setGlobalError = ({ state }, error) => {
    state.error = error
}