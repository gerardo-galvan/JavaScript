const finalGrade  = (midterm, final, homework) => {
  
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100))  {
    return 'You have entered an invalid grade.'; 
    }
    
    let averageGrade = (midterm + final + homework) / 3;
    
    if (averageGrade < 60) {
    return 'F';
    
     }else if (averageGrade >= 60 && averageGrade <= 69) {
    return 'D';
    
    }else if (averageGrade >= 70 && averageGrade <= 79) {
    return 'C';
    
    }else if (averageGrade >= 80 && averageGrade <= 89) {
    return 'B';
    
    }else if (averageGrade >= 90 && averageGrade <= 100) {
    return 'A';
    }
    }
    
    // Uncomment the line below when you're ready to try out your function
      console.log(finalGrade(99, 92, 95)) // Should print 'A'
    
    // We encourage you to add more function calls of your own to test your code!