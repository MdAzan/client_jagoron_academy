
export const addGenderHandler = (data) => {
    const url = "http://localhost:5000/profile/add_gender";
    const dependency = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)};
    fetch(url,dependency)
        .then(res => {
            const sts = res.status;
            return ((sts === 200) ? {status: sts, resolvedPromise: res.json()} : {status: sts, resolvedPromise: res.json()})
        })
        .then((res) => {
            (res.status === 200) && (res.resolvedPromise.then(data => console.log(data)));
            (res.status === 404) && (res.resolvedPromise.then(err => console.log(err)));
        })
}