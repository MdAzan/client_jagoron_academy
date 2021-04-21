import { MY_BACKEND } from "../../../global";

export const emptyWarnings = { firstName: '', lastName: '', email: '', phoneNumber: '', password: '' };
export const emptyFormDatda = { firstName: '', lastName: '', eamil: '', phoneNubmer: '', password: '', confirmPassword: '' };



// 01 validate name
export const validateName = (e, cb) => {
    if (e.target.name === 'firstName' || e.target.name === 'lastName') {
        const name = e.target.name;
        const val = e.target.value;
        const isNameValid = /^[a-zA-z0-9]+$/.test(e.target.value);
        (!isNameValid || !val) && (cb(`Use (a-z) or numbers between (0-9) for your ${(name === 'firstName') ? 'first' : 'last'} name`, ""));
        (isNameValid && val) && cb('', e.target.value);
    }
}


// 03 validate email
export const validateEmail = (e, cb) => {
    if (e.target.name === 'email') {
        //const emailValid = /^[a-z0-9]+[a-z0-9.]+[a-z]+(\b[@]{1})+[a-z]+(\b[.]{1})+[a-z]+$/i.test(e.target.value);
        const hasPerfectLength = (e.target.value.length > 5) && (e.target.value.length < 31);
        const hasValidStarting = /^[a-z0-9]/i.test(e.target.value);
        const isRightEmailAddress = /[a-z]+(\b[@]{1})+[a-z]+(\b[.]{1})+[a-z]+$/ig.test(e.target.value);

        if (!hasPerfectLength) {
            cb('Sorry, your email must be between  6 and 30 characters long.', '');
        } else if (!hasValidStarting) {
            cb('Sorry, the first character of your email must be an ascii letter (a-z) or number (0-9)', '');
        } else if (!isRightEmailAddress) {
            cb('Sorry, the domain name of your email address is not valid', '');
        } else {
            cb('', e.target.value);
        }
    }
}


// 04 validate phone number
export const validatePhone = (e, cb) => {
    if (e.target.name === 'phoneNumber') {
        const isValidPhoneNumber = /^[0-9]+$/.test(e.target.value);
        const hasPerfectLength = (e.target.value.length === 11);

        if (!hasPerfectLength) {
            cb('Sorry, 11 digits are required for phone numbers', '');
        }
        else if (!isValidPhoneNumber) {
            cb('Sorry, numbers between 0-9 are only valid for phone number', '');
        }
        else {
            cb('', e.target.value);
        }
    }
}


// 05 validate password
export const validatePassword = (e, cb) => {
    if (e.target.name === 'password') {
        const hasLength = (e.target.value.length) > 7 && (e.target.value.length < 51);
        const hasSpecialChar = /[^a-z0-9]/ig.test(e.target.value);
        const hasNumber = /[0-9]/g.test(e.target.value);
        const hasABC = /[a-z]/ig.test(e.target.value);

        if (hasSpecialChar && hasNumber && hasLength && hasABC) {
            cb('', e.target.value);
        } else {
            cb('Use 8 or more characters with a mix of letters, numbers & symbols', '');
        }

    }
};



// 06 password matcher
export const handlePasswordMatcher = (password, confirmPassword, cb) => {
    if (password === confirmPassword) {
        cb(true);
    } else {
        cb(false);
    }

};



// 07 create user 
export const checkIfThisEmailAndPhonenumberIsAlreadyUsed_Handler = async (data, cb) => {
    // const url = "http://localhost:5000/auth/signup/check_if_email_and_phonenumber_is_already_used";
    const url = `${MY_BACKEND}/auth/signup/check_if_email_and_phonenumber_is_already_used`;
    const dependency = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }

    await fetch(url, dependency)
        .then(res => {
            console.log(res);
            const sts = res.status;
            return (sts === 200) ? ({ status: sts, resolvedPromise: res.json() }) : ({ status: sts, resolvedPromise: res.json() })
        })
        .then(data => {
            if (data.status === 403) {
                data.resolvedPromise.then(error => cb(error, null));
            };
            if (data.status === 200) {
                data.resolvedPromise.then(result => cb(null, result));
            };
        })
        .catch(err => console.log(err));
};


export const handleCreateAccountIfUserIsVerified = async (data, cb) => {
    // const url = "http://localhost:5000/auth/signup/create_user_after_verification";
    const url = `${MY_BACKEND}/auth/signup/create_user_after_verification"`
    const dependency = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }

    await fetch(url, dependency)
        .then(res => {
            console.log(res);
            const sts = res.status;
            return (sts === 200) ? ({ status: sts, resolvedPromise: res.json() }) : ({ status: sts, resolvedPromise: res.json() })
        })
        .then(data => {
            if (data.status === 401) {
                data.resolvedPromise.then(error => cb(error, null));
            };
            if (data.status === 200) {
                data.resolvedPromise.then(result => cb(null, result));
            };
        })
        .catch(err => console.log(err));
}






// 08 login user
export const ifEmailAndPasswordIsMatchedThenLogin_Handler = async (data, cb) => {
    // const url = "http://localhost:5000/auth/signin";
    const url = `${MY_BACKEND}/auth/signin`;
    const dependency = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
    await fetch(url, dependency)
        .then(res => {
            const sts = res.status;
            return (sts === 200) ? ({ status: sts, resolvedPromise: res.json() }) : ({ status: sts, resolvedPromise: res.json() })
        })
        .then(data => {
            (data.status === 401) && data?.resolvedPromise.then(error => cb(error, null));
            (data.status === 200) && data?.resolvedPromise.then(res => cb(null, res));
        })
        .catch(err => console.log("line Number 115 in handleSignup.js", err));
};