console.log("test")

const songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
console.log(songs)

songs.push("Take me to Church", "Lieutenant Kije", "Dangerous Woman")
console.log(songs)
const totalSongs = songs.length;
console.log(totalSongs)

songs.push("Blurred Lines", "Baby Shark")
console.log(songs)

console.log(totalSongs) // IMMER NOCH 6 STATT 8, WEIL OBEN DEFINIERT. 

const besteFussballerAllerZeiten = ["Mia Hamm", "Michelle Akers", "Megan Rapinoe", "Mo Saleh", "Pelé"]
besteFussballerAllerZeiten.push("Thibaut Courtois", "Brianna Scurry", "Manuel Neuer")
console.log(besteFussballerAllerZeiten);
const teamRoster = besteFussballerAllerZeiten.length;
console.log(teamRoster);