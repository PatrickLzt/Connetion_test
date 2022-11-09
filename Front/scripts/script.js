// Objects
class Validator {

    constructor(){
        this.validations = [
            'data_min_len',

        ]
    }

    // validation init on all fields
    validate(form){
       
        // get inputs
        let inputs = document.getElementsByTagName('input')

        // transform into array
        let inputs_array = [...inputs]

        // Loop for each input find
        inputs_array.forEach(function(input){
                for(let i = 0; this.validations.length > i; i++){
                    if(input.getAttribute(this.validations[i]) != null){

                        // Transform sting into method name
                        let method = this.validations[i].replace(`data_`, ``)

                        // Input value
                        let value = input.getAttribute(this.validations[i])

                        // Invoke method after transform
                        this[method](input, value)

                    }
                }
            }, this)
    }

    // Verify the minimum length of chars
    min_len(input, min_value){
        
        let input_length = input.value.length

        let error_message = `The field needs ${min_value} characters`  

        if(input_length < min_value){
            this.print_message(input, error_message)
        }

    }

    // Print the notify message
    print_message(input, msg){
        let template = document.querySelector('.error_validation').cloneNode(true);

        template.textContent = msg

        let input_parent = input.parentNode

        template.classList.remove('template')

        input_parent.appendChild(template)
    }
}

let form = document.getElementById("register_form")
let submit = document.getElementById("submit_button")
let validator = new Validator()

// Validation events
submit.addEventListener('click', function(e){
    
    e.preventDefault()

    validator.validate(form)

})