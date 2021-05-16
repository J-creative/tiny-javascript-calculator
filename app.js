let q = (o)=> document.querySelector(o),
root = q('.root'),
keys=[1,2,3,4,5,6,7,8,9,'+','-','*','/','='],
screen=''
cli= (d)=> console.log(d.target)
btns=keys.map(e=>root.insertAdjacentHTML("afterbegin", '<button onclick=\'cli()\'>'+e))
