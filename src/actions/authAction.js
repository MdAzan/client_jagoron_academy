import { MY_BACKEND } from "../global";

// 01 get token from cookie
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}





// o2 get user infromation using cookie from server
export const getUserInfoOnPageLoad = async (session_id, cb) => {
    // const url = "http://localhost:5000/auth/signin/is_already_signedin";
    const url = `${MY_BACKEND}/auth/signin/is_already_signedin`;
    const dependency = {method: "GET", headers: { 'Content-Type': 'application/json', session_id}};
    fetch(url,dependency)
        .then(res => {
            const sts = res.status;
            return (sts === 200) ? ({ status: sts, resolvedPromise: res.json() }) : ({ status: sts, resolvedPromise: res.json() })
        })
        .then(data => {
            (data.status === 401) && data?.resolvedPromise.then(error => cb(error,null));
            (data.status === 200) && data?.resolvedPromise.then(res => cb(null,res));
        })
        .catch(err => console.log("line Number 41 in authAction.js", err));
}




// login action
export const beLoggedIn = (data) => async (dispatch) => dispatch({ type: 'beLoggedIn', payload: data });




// logout action
export const beLoggedOut = (history) => async (dispatch) => {
    try {
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch({ type: 'beLoggedOut', payload: null });
        await history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}
