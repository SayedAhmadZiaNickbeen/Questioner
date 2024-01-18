function submitForm() {
    // Retrieve form data
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;
  
    // You can perform further processing or send the data to a server here
    // For now, let's log the data to the console
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Question 1:', question1);
    console.log('Question 2:', question2);
  
    // Optionally, you can reset the form after submission
    document.getElementById('questionnaireForm').reset();
  }
  