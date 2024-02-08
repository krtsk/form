document
    .getElementById ("button")
    .addEventListener ("click", function () {
        const name = document.getElementById ("name")
        const age = document.getElementById ("age")
        const email = document.getElementById ("email")

        const result = name.value + ", " + age.value + ", " + email.value
        
        alert (result)
    })