import http from './httpSevice'

// import config from './config.json'

export const registerUser = user => {
    return http.post(`http://192.168.126.34:3000/v1/api/auth/signup`, user)
}
export const loginUser = user => {
    return http.post(`http://192.168.126.34:3000/v1/api/auth/signin`, user)
}
export const checkPhone = phone => {
    return http.post(`http://192.168.126.34:3000/v1/api/auth/checkregistration`, phone)
}
export const sendCode = phone => {
    return http.post(`http://192.168.126.34:3000/v1/api/auth/sendcode`, phone)
}
export const verifyCode = code => {
    return http.post(`http://192.168.126.34:3000/v1/api/auth/verifycode`, code)
}
export const getUsers = () => {
    return http.get(`http://192.168.126.34:3000/v1/api/users`)
}
export const updateUserProfile = (picture) => {
    return http.put(`http://192.168.126.34:3000/v1/api/user/picture`, picture)
}
export const ChangeUserRole = (userId, role) => {
    return http.put(`http://192.168.126.34:3000/v1/api/users/role/${userId}`, role)
}
export const profilePicture = (file) => {
    return http.put(`http://192.168.126.34:3000/v1/api/user/picture`, file, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
}
export const DeleteProfilePicture = () => {
    return http.delete(`http://192.168.126.34:3000/v1/api/users/profilepicture`)
}
export const getUserDetails = (id) => {
    return http.get(`http://192.168.126.34:3000/v1/api/user/${id}`)
}
export const getProfile = (token) => {
    return http.get(`http://192.168.126.34:3000/v1/api/user/me`, token)
}
export const getProfilePicture = (id) => {
    return http.get(`http://192.168.126.34:3000/v1/api/file/${id}`)
}
