// Q1 Find all users who are interested in playing video games.
function intrestInVideoGames(users){
    let reg=/video games/ig;
    let arr=[];
    for(let user in users){
        if(reg.test(users[user]["interests"]?.[0]))arr.push(user);
    }
    return arr;
}
// Q2 Find all users staying in Germany.
function inGermany(users){
    let arr=[];
    for(let user in users){
        if(users[user].nationality=="Germany")arr.push(user);
    }
    return arr;
}
// Q3 Find all users with masters Degree.
function withMasters(users){
    let arr=[];
    for(let user in users){
        if(users[user].qualification=="Masters")arr.push(user);
    }
    return arr;
}
// Q4 Group users based on their Programming language mentioned in their designation.
function groupUsers(users){
    let regPython=/python/i;
    let regGolang=/golang/i;
    let regJavascript=/javascript/i;
    let arr={"Python":[],"Javascript":[],"Golang":[],"Others":[]};
    for(let user in users){
        if(regPython.test(users[user].desgination))arr["Python"].push(user);
        else if(regJavascript.test(users[user].desgination))arr["Javascript"].push(user);
        else if(regGolang.test(users[user].desgination))arr["Golang"].push(user);
        else arr["Others"].push(user);
    }
    return arr;
}

export{intrestInVideoGames,inGermany,withMasters,groupUsers};