let tableOfContents = '';


// function to generate markdown for README
function generateMarkdown(data) {

  if (data.table) {
    tableOfContents = `
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
    `
  }

  return `
  # ${data.title}

  ${licenseOptions[data.license].badge}

  ## Description 
  ${data.description}
  
  ${tableOfContents}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  This application is covered under ${licenseOptions[data.license].name}

  ## Tests
  ${data.tests}

  ## Questions 
  Link to my [GitHub profile](https://github.com/${data.github})  
  Reach me with additional questions at ${data.email}  

`;
}

const licenseOptions = {
  MIT: {
    name: "MIT License",
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  Apache: {
    name: "Apache License 2.0",
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  },
  Mozzila: {
    name: ' Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  },
  GNU: {
    name: "GNU General Public License 3.0",
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
}




module.exports = generateMarkdown;
