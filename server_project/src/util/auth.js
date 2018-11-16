
const authLogin = () =>{

    let user_info = JSON.parse(localStorage.getItem('phone') || {})

    return user_info
}

export default authLogin