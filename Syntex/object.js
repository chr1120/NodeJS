//배열 생성
var members=['egoing','k0070','hrhr']
console.log(members[1]); //k0070
var i=0;
while(i<members.length){
    console.log('array loop',members[i]);
    i=i+1;
}

//객체 생성 //어떤 역할에 대한 것은 객체가 더 적당하다.
var roles={
    'programmer':'egoing',
    'designer':'k0070',
    'manager':'hrhr'
}
console.log(roles.designer); //k0070
//key 값을 문자로도 전달 가능
console.log(roles['designer']); //k0070

for(var name in roles){
    console.log('object => ',name, 'value => ',roles[name]);
}