function validateSyntax() {
    let input = document.getElementById('petInput').defaultValue = 'pet_';
    let year =  prompt('Enter the year the dog was born');
    let name =  prompt('Enter the name of the dog');
    // Validation logic goes here
    let result = document.getElementById('result').innerHTML = input + '_' + year + name; // Placeholder for validation result
    

    console.log(result.startwith('pet_'))
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}

 
