const parties = {
    "MJP" : 0,
    "BNC" : 0,
    "NMC" : 0,
    "BAP" : 0,
    "SSP" : 0,
    "API" : 0,
}
const party = ["MJP","BNC","NMC","BAP","SSP","API"]
let voted = false
function vote(buttons) {
    parties[buttons] += 1
}
function save(){
    const buttons = document.querySelector('input[name="party"]:checked');
   
    if(buttons===null){
        alert("Select the political party.")
        return
    } 
    voted = true
    vote(buttons.value)
    alert("Voted👆 Successfully.🙏")
}
function new_vote(){
    for(let i = 0;i<party.length;i++){
        parties[`${party[i]}`] = 0
    }
}
function count_vote(){
    s = ""
    for(let i = 0;i<party.length;i++){
        s += `${party[i]} : ${parties[party[i]]}\n`
    }
    alert(s)
}