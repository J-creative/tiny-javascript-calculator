let rt= document.querySelector('div'),
keys=['=','/','.',0,'C','*',3,2,1,'-',6,5,4,'+',9,8,7],
screen='',l
keys.map(e=>rt.insertAdjacentHTML("afterbegin", '<button>'+e))
rt.addEventListener('click',(e)=>{let i=e.target.innerHTML
    rt.removeChild(rt.lastChild)
    i=='C' ? screen='0' :  i=='=' ? l>=0 && !screen.replaceAll('-','').match(/\D{2,}/) ? screen=eval(screen) : console.log('hi') : l=='=' && i>=0 ? screen=i : screen+=i
 l=i
 rt.append(screen)})