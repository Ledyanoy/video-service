export const setLogonInStorage = (login) => {
    localStorage.videoServiceLogin = login;
}

export const deleteLoginFromStorage = () => {
    delete localStorage.videoServiceLogin;
}