function MarkToGrade(){
    
    let grade = document.getElementById("GradeInput").value;

    let result = document.getElementById("result");

    if(grade==="" || isNaN(grade)){
        result.innerHTML = "Please enter a number";
        return
    }

    grade = Number(grade);

    if(grade<0){
        result.innerHTML = "Mark cannot be negative";
        return;
    }
    
    else if(grade>100){
        result.innerHTML = "Mark cannot be greater than 100";
        return;
    }
    
    else if(grade>=90){
        result.innerHTML = "Grade: A";
    }
    
    else if(grade>=80){
        result.innerHTML = "Grade: B";
    }
    
    else if(grade>=70){
        result.innerHTML = "Grade: C";
    }
    
    else if(grade>=60){
        result.innerHTML = "Grade: D";
    }
    
    else if(grade>=50){
        result.innerHTML = "Grade: E";
    }

    else{
        result.innerHTML = "Grade: F";
    }
}