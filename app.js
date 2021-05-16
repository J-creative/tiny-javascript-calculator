let q = (o)=> document.querySelector(o),
rt = q('.root'),
keys=[1,2,3,4,5,6,7,8,9,'+','-','*','/','='],
screen=''
btns=keys.map(e=>rt.insertAdjacentHTML("afterbegin", '<button>'+e))
rt.onclick(hello)
function hello(){}
