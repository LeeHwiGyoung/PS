function solution(orders, course) {
    var answer = [];
    
    let fill = new Array(11).fill(0); //index가 코스를 의미하며 fill의 element가 course의 최대값이 된다.
    
    let ordersArr = Array.from(orders, (el)=>  { //orders의 string 값을 배열로 만들어 조합의 수를 찾기 위해
        return el.split('');
    })
    
    let visit = Array.from(ordersArr, (el) => new Array(el.length).fill(false)) 
    //orders의 요소마다 길이가 다르기 때문에 2차원 배열로 선언하며 조합에서 중복여부를 저장
    
    let combinationMap = new Map() //조합을 저장할 MAP
    
    const combination = (idx, n , r , cnt ,order , visit , data) => { // idx , orders 요소의 길이 , course 요소의 값 , 현재 선택된 개수 , orders 요소를 배열로 쪼갠 값 , visit 배열중 orders 요소와 일치하는 배열, 조합을 저장할 배열 
        if(cnt === r){
            const temp = Array.from(data); //sort는 순서가 바뀐 배열을 리턴하기 때문에 새로운 배열을 만들어서 sort
            const str = temp.sort().join("") //XY YX 는 같은 조합 값이므로 sort후 join
            if(combinationMap.has(str)){ 
                combinationMap.set(str , combinationMap.get(str) + 1)
            }else{
                combinationMap.set(str , 1)
            }
            return
        }
        for(let i = idx ; i < n; i++){
            if(visit[i] === true) continue
            visit[i] = true;
            data[cnt] =  order[i]
            combination(i , n , r , cnt + 1, order, visit , data)
            visit[i] = false;
        }
    }
    
    for(let i = 0 ; i < course.length ; i++){ //r개 선택
        for(let j = 0 ; j < orders.length ; j++ ){ //n개중에
            combination(0 , ordersArr[j].length ,course[i] , 0 , ordersArr[j], visit[j] , new Array(course[i]));
        }
    }
    
    let mapToArr = [...combinationMap]; //map을 value를 기준으로 정렬하기 위해서 선언
    
    mapToArr.sort((a,b)=> b[1] - a[1]); //value를 기준으로 정렬
    
    for(let i = 0 ; i < mapToArr.length ; i++){
        const [str , cnt] = mapToArr[i]; //str = key , cnt = value
        const len = str.length; //fill[len] 에 max 값을 저장하기위해
        if(cnt >= 2 && cnt >= fill[len] && course.includes(len)){ //2번이상 주문되었으며 최대값이고 코스에 있으면
            fill[len] = cnt; //최대값 저장
            answer.push(str); //answer에 저장
        }
    }
    answer.sort() //사전순 정렬
    return answer;
}
