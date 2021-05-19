function calcIphone() {
    let feet = document.getElementById('inputFeet').value
    let inches = document.getElementById('inputInches').value
    let totalCm = feet * 30.48 + inches * 2.54 // Convert foot and inches to cm
    let iphoneHeight = 13.84 // Height of an iphone 8
    let iphones = totalCm / iphoneHeight // Work out numbers of iphones
    let roundedIphones = Math.ceil(iphones) // Round up
    document.getElementById('numOfIphones').innerHTML = roundedIphones
    document.getElementById('parentNumOfIphones').style.display = 'block'
    document.getElementById('iphoneImageDiv').innerHTML = ''
    for (let i = 1; i < roundedIphones + 1; i++) {
        document.getElementById('iphoneImageDiv').innerHTML += // Iphone photos
            '<img src="iphone.png" width="10%" height="auto">'
    }
}
