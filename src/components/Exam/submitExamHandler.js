
export const submitExam = async (url, data, cb) => {
    const dependency = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data),
    }

    await fetch(url, dependency)
    .then(res => {
        if(!res.ok){
            return { status: res.status, verifyData: res.json()};
        }else{
            return { status: res.status, verifyData: res.json()};
        }
        
    })
    .then(data => {
        
        if(data.status === 404){
            data?.verifyData.then(res => {
                cb(res);
            })
        }

        if(data.status === 200){
            data?.verifyData.then(res => {
                cb({isExamSubmitted: true, data: res});
            })
        }
        
    })
    .catch(err => console.log(err));
};