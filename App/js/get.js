async function getCreate(){
    let response = await getTokenPopup(tokenRequest);
    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);
    let promise = await fetch("https://tieventsy.azurewebsites.net/api/User/create",{
        method: "GET",
        headers: headers
    });
    if (promise.ok){
        let json = await promise.json()
        console.log(json)
    }else {
        console.log("Ошибка HTTP: " + promise.status)
    }
}
