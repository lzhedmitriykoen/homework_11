/* Task 1*/

let a = prompt('Please, type number A', 'Number')
let b = prompt('Please, type number B', 'Number')
 if ( a > b){
     alert ('a > b');
 } else if (a < b){
     alert ('a < b');
 } else if (a==b){
     alert('a==b');
 } else if (a===b){
     alert('a===b');
 }


/* Task 2 */
let funEnd0 = function () {
    let a = prompt('Please, input number here', 'Number')
    if (a % 10 == 0) {
        alert('TRUE');
    } else {
        alert('FALSE');
    }
}

/* Task 3 */

 do {
     i=0;
     i++;
 }while (i==100);

 /* Task 4*/
let flag = 0;
let counterRandom = 0;
let fun4 = function () {
    if (flag==0){
        counterRandom = +prompt('Input your number', 0)
        if (isNaN(counterRandom)){
            counterRandom=-1
        }
        flag=1;
    }
    if (flag==1){
        counterRandom++;
        alert(counterRandom)
    }
}
