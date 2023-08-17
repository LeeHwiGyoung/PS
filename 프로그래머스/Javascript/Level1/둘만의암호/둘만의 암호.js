const set_a_to_z = (str)=>{
    return ((str.charCodeAt()+1 - 97) % 26 + 97)
}

function solution(s, skip, index) {
    return s.split('').map(str=>{
        let s = str
        for(let i=0;i<index;i++){
            s = String.fromCharCode( set_a_to_z(s) )   
            skip.indexOf(s) !== -1 && i--
        }
        return s
    }).join('')
}
