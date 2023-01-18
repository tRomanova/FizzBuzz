// This function is responsible for receiving and responding to user input
function getValue() {
    //get user input from the page
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    let stopValue = document.getElementById('stopValue').value;

    //parse our inputs as number
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    //verify our inputs are numbers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {

        if(stopValue > 5000) {
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Oops',
                    text: 'Please enter valid number!'
                }
            )
        }else if(fizzValue === 0 || buzzValue === 0){
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Oops',
                    text: 'Fizz or Buzz cannot be 0!'
                }
            )
        }else{

            //if they are, generate our numbers
            let numberArray = generateFizzBuzz(fizzValue, buzzValue, stopValue);
            //display numbers on the page
            displayFizzBuzz(numberArray);
        }

    }  else {
        //if inputs are not numbers, tell user to insert integer
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops',
                text: 'Only integer are allow for Hondo!'
            }
        )
    }
}

// This function is responsible for generating the values you will display
function generateFizzBuzz(fizzValue, buzzValue, stopValue) {

    let results = []

    for (let i = 0; i < stopValue; i++) {
        let arrElement = i + 1

        if (arrElement % fizzValue === 0 && arrElement % buzzValue === 0) {
            results[i] = 'FizzBuzz'
        } else if (arrElement % fizzValue === 0) {
            results[i] = 'Fizz'
        } else if (arrElement % buzzValue === 0) {
            results[i] = 'Buzz'
        } else {
            results[i] = arrElement;
        }
    }
    return results;
}
//This function is responsible for displaying the generated values on the page
function displayFizzBuzz(arr) {
    let tableBody = document.getElementById('results');
    let tableHtml = '';

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let className = 'num';

        if (value === "Fizz") {
            className = 'fizz';
        } else if (value === "Buzz") {
            className = 'buzz';
        } else if (value === "FizzBuzz") {
            className = "fizzBuzz"
        }

        if (i % 5 === 0) {
            tableHtml += '<tr>'
        }

        let tableRow = `<td class="${className}">${value}</td>`;
        tableHtml = tableHtml + tableRow;

        if ((i + 1) % 5 === 0) {
            tableHtml += '</tr>';
        }
    }
    tableBody.innerHTML = tableHtml;
}