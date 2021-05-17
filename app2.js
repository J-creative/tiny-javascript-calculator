let q = o=> document.querySelector(o),
 rt= q('div'), s=q('input'),
 f=  a => a=='C' ? s.value='': a=='=' ? s.value=eval(s.value) : s.value+=a
k=['=','/','.',0,'C','*',3,2,1,'-',6,5,4,'+',9,8,7]
k.map(e=>rt.insertAdjacentHTML("afterbegin", "<button onclick=\"(()=>f(&quot;"+e+"&quot;))();\">"+e))
