function Grades (score) {
let grade;
if( score == null || score == NaN || score == "") {
    throw new Error ("input must not be null / must be a number")
}
else {
switch(true) {
    case (score >= 0.9 && score <1):
    grade = "A";
        break;
    case (score >= 0.8 && score < 0.9):
    grade = "B";
        break;
    case (score >= 0.7 && score < 0.8): 
    grade = "C";
        break;
    case (score >= 0.6 && score < 0.7):
    grade = "D";
        break;
    case (score <= 0.6 && score >= 0):
    grade = "F";
        break;

    default:  
    throw new Error ("input should be a number between 0 - 1")
}
return grade;
}
}
