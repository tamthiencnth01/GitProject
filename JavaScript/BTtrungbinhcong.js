let inputPhysical
let inputChemestry
let inputBiology
inputPhysical =prompt("Enter the point Physical:")
inputChemestry =prompt("Enter the point Chemestry:")
inputBiology =prompt("Enter the point Biology:")
let Physical = parseInt(inputPhysical)
let Chemestry = parseInt(inputChemestry)
let Biology = parseInt(inputBiology)
let GPA = (Physical+Chemestry+Biology)/3
let Sum = Physical+Chemestry+Biology
document.write('The GPA is:'+ GPA);
document.write('<br/>')
document.write('Sum is:'+ Sum)