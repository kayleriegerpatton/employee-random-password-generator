# employee-random-password-generator

Random password generator using HTML, CSS, and JS.

Generator prompts user for specific criteria including a password length of 8-128 characters, and at least one type of character (lowercase, uppercase, numeric, special). This criteria is then used to generate the password after all on-screen prompts.

## Deployed Application

[Employee random password generator](https://kayleriegerpatton.github.io/employee-random-password-generator/ "Employee random password generator")

## Built With:

- CSS
- HTML
- Javascript

## Work Flow

- The application first gets password criteria by prompting the user for a length, validating the response, and then confirming the desired character type(s), requiring at least one selection. These 5 criteria are all assigned to a password criteria object.
- Four functions for getting random characters (lowercase, uppercase, numeric, and special) are pushed into an array.

## Images

### Planning

Flow chart and notes:
![Flow chart and notes](./Assets/images/planning-notes.jpeg)

### Screenshots

Generator prompt message:
![Password generator prompt message](./Assets/images/screenshots/password-generator-prompt.png)

Password generator result display:
![Password generator result](./Assets/images/screenshots/password-generator-result.png)
