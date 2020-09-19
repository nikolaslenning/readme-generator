// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  ${data.table}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributing}

  ## License
  ${data.license}

  ##Badges
  

`;
}

module.exports = generateMarkdown;
