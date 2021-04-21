
export const getExampaperOrResultsheet = (url, cb) => {
    fetch(url)
            .then(res => {
                const sts = res.status;
                return (sts === 200) ? ({ status: sts, resolvedPromise: res.json() }) : ({ status: sts, resolvedPromise: res.json() });
            })
            .then(data => {
                (data.status === 200) && (data.resolvedPromise.then(res => cb(null, res)));
                (data.status === 404) && (data.resolvedPromise.then(error => cb(error, null)));
            })
            .catch(err => console.log(err))
}