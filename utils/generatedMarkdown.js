
//create a function that returns a license badge based on user pick of license, if not, return 'user did not select'.

//creat a function that returns the licesnse link based on user pick of none return SOMETHING

//creat a function that returns the license section of the readME if there is none return SOMETHING. 


function generateMarkdown(data) {
    reutrn `
    ##Description
    ${data.description}

    ##GitHub User
    ${data.github}

    ##GitHub Email 
    ${data.email}
    `
}



module.exports = generateMarkdown;