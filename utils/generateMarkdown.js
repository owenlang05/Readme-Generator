// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  switch(license) {
    case 'MIT':
     badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
     break;
    case 'GPL':
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'BSD':
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "None":
      return "" 
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  switch(license) {
    case 'MIT':
     link = "https://opensource.org/licenses/MIT";
     break;
    case 'GPL':
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case 'BSD':
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "None":
      return "" 
  }

  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";

  switch(license) {
    case 'MIT':
     licenseText = "MIT License";
     break;
    case 'GPL':
      licenseText = "GNU GPL v3 License";
      break;
    case 'BSD':
      licenseText = "BSD 3-Clause License";
      break;
    case "Apache":
      licenseText = "Apache 2.0 License";
      break;
    case "None":
      return "" 
  }
  return `## License 

${licenseText}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## How to Contribute

${data.contribute}

## Tests

${data.test}

## Questions

https://github.com/${data.github}

Any additional questions can be sent to this email ${data.email}
`;
}

module.exports = generateMarkdown;
