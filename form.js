var scriptURL = "https://script.google.com/macros/s/AKfycbxrIUPVainngPth2GMtpbqPA6SzoYgm3ynnd1t4rCjsgIM14RSnSq0ztSfJZ5r3ENwo/exec"

var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST',body: new FormData(form)})
    .then(respond => document.getElementById('form.alert').innerHTML = "Data was stored")
    .catch(error => document.getElementById('form.alert').innerHTML = "Data was not stored")
})