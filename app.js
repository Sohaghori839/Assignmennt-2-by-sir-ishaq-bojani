//  Question 1
const outerFun = (a) =>{
    let b = 10;
    const innerFun =() =>{
        let sum = a + b;
        console.log( `the sum of two no. is ${sum}.`); 
    }
    innerFun();
}
outerFun(5);

// Question 2
// function checkArray(arr, val) {
//     if (!arr.length) {
     
//       return false;
//     } else if (arr[0] === val) {
     
//       return true;
//     } else {
      
//       return checkArray(arr.slice(1), val);
//     }
//   }
//   const arr = [1, 2, 3, 4, 5, 6, 7];
//   const val = 2;
//   const result = checkArray(arr, val);
//   console.log(result); // Output: true
  
//   const val2 = 10;
//   const result2 = checkArray(arr, val2);
//   console.log(result2); // Output: false
   
// Question 3
// function newParagraph(text) {
//     const p = document.createElement('p'); 
//     p.textContent = text; 
//     document.body.appendChild(p); 
//   }
//   newParagraph('This is a new text!');

// Question 4
// function changeBackgroundColor(p, newColor) {
//     p.style.backgroundColor = newColor;
//   }
//   const newBg = document.getElementById('addhere');
//   changeBackgroundColor(newBg, 'orange');

// Questio 5
// function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const varObj = { name: 'soha', age: 22 };
//   saveToLocalStorage('varObj', varObj);
    