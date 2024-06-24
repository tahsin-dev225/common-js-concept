/* 
  Truthy::
1. true
2. any number(+positive 3,2 or - nagative -3, -4) will be truthy EXCEPT 0;
3. any string except empty stirng (' ')
4. 'false'
5. {} {a:34, b:'df'}
6. 
7. 

  Falsy::
1. false
2. 0
3. empty stirng (' ')
4. undefined
5. null
*/
const x = 's'
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
}