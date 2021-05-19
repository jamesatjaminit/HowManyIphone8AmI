function calcIphone() {
    let feet = document.getElementById('inputFeet').value
    let inches = document.getElementById('inputInches').value
    let totalCm = feet * 30.48 + inches * 2.54
    let iphoneHeight = 13.84
    let iphones = totalCm / iphoneHeight
    let roundedIphones = Math.ceil(iphones)
    console.log(totalCm)
    document.getElementById('numOfIphones').innerHTML = roundedIphones
    document.getElementById('parentNumOfIphones').style.display = 'block'
    document.getElementById('iphoneImageDiv').innerHTML = ''
    for (let i = 1; i < roundedIphones + 1; i++) {
        document.getElementById('iphoneImageDiv').innerHTML +=
            '<img src="iphone.png" width="10%" height="auto">'
    }
}
