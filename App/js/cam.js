function check(){
    if (document.SettingsSight.cam[0].checked){
        document.getElementById("downloadCam").innerHTML=
            `<input type="file" accept="image/jpeg">`
        document.getElementById("camera").innerHTML=
            `Сделать фото`
    }
    if (document.SettingsSight.cam[1].checked){
        document.getElementById("downloadCam").innerHTML=
            `Загрузить Фото`
        document.getElementById("camera").innerHTML=
            `<div id="myCam" >sfas</div>
                <button type="button" onclick="Cam()">Сделать</button>
               <button type="button" onclick="startCam()">Заново</button>`
        startCam();
    }
}
document.getElementById("downloadCam").innerHTML=
    `<input type="file" accept="image/jpeg">`


function startCam(){
    Webcam.set({
        width:320,
        height:240,
        image_format: "jpeg",
        jpeg_quality: 90
    });
    Webcam.attach('#myCam');
}



function Cam(){
    take_snapshot();
}

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById('myCam').innerHTML =
            `<img src="${data_uri}">`

    });
    Webcam.off();

}