var register = function (data) {
    var url = "https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/register";
    var response = fetch(url, {
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
    });
    // .then(res => res.json())
    // .then(data => {
    //     if(data.success === true) {
    //         alert("User created!");
    //     }
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    console.log(data);
};
var getSessions = function () {
    var url = "\n    https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/studios/{merchantId}";
    var response = fetch(url, {
        method: "GET"
    })
        .then(function (res) { return res.json(); })
        .then(function (data) { return console.log(data); })["catch"](function (error) {
        console.log(error);
    });
};
