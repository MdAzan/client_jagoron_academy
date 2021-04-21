import axios from 'axios';


// export const uploadProfilePictureHandler = async (data, cb) => {
//     const url = 'http://localhost:5000/profile/profile_picture';
//     const dependency = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({photo: data}) };
//     await fetch(url, dependency)
//         .then(res => {
//             const sts = res.status;
//             return (sts === 200) ? ({ status: sts, resolvedPromise: res.json() }) : ({ status: sts, resolvedPromise: res.json() })
//         })
//         .then(data => {
//             (data.status === 401) && data?.resolvedPromise.then(err => cb(err,null));
//             (data.status === 200) && data?.resolvedPromise.then(res => cb(null, res));
//         })
//         .catch(err => console.log("line Number 13 in profileHandler.js", err));
// };


export const uploadProfilePictureHandler = async (data, cb) => {
    const url = 'http://localhost:5000/profile/profile_picture';
    const {datas} = await axios.post(url, data);
    cb(null,datas);
};