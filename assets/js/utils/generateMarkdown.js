function generateMarkdown(data) {
  return `
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  
  # **${data.title}**

  # Table of Contents
  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  # Project Description
  ${data.description}
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Tests
  ${data.tests}

  # License
  ${data.license}

  # Contributions
  ${data.contributors}

  # Questions
  If you have any questions, please contact the project owner by clicking on the email listed below.
  ![user image](${data.image})
  #### ${data.email !== null ? "[" + data.email + "](mailto:" + data.email + ")" : "This user's email is private."}


`;
}

module.exports = generateMarkdown;


// # Project Title:  ${data.title}
// # My GitHub username is: ${data.username}
// # My image: ${data.image}
// # Github email: ${data.email}



// #### Licensed under the [MIT License](https://opensource.org/licenses/MIT).

//   Copyright (c) [2020] [Guillermo Martin]

//   Permission is hereby granted, free of charge, to any person obtaining a copy
//   of this software and associated documentation files (the "Software"), to deal
//   in the Software without restriction, including without limitation the rights
//   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//   copies of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:

//   The above copyright notice and this permission notice shall be included in all
//   copies or substantial portions of the Software.

//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.