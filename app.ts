const register = (data: any) => {
    const url = `https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/register`
    const response =  fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "name": data.name,
            "dateOfBirth": data.dateOfBirth,
            "email": data.email,
            "cityOfResidence": data.cityOfResidence,
            "username": data.username,
            "password": data.password,
            "phoneNumber": data.phoneNumber
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success === true) {
            alert("User created!");
        }
    })
    .catch(error => {
        console.log(error)
    })
};
const getSessions = () => {
    const url = `
    https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/studios/{merchantId}`
    const response =  fetch(url, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => (data))
    .catch(error => {
        console.log(error)
    })
};