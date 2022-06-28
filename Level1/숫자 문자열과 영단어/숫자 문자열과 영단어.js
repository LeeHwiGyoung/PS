function solution(s) {
    const number = [
        { num :'0', str : 'zero'},
        { num :'1', str : 'one'},
        { num :'2', str : 'two'},
        { num :'3', str : 'three'},
        { num :'4', str : 'four'},
        { num :'5', str : 'five'},
        { num :'6', str : 'six'},
        { num :'7', str : 'seven'},
        { num :'8', str : 'eight'},
        { num :'9', str : 'nine'}   
    ];

   number.forEach((el) => {
        const re = new RegExp(el.str , 'g');
        s = s.replace(re, el.num);
    });

    return Number(s);
}
