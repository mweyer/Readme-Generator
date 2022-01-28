function generateMarkdown(data) {
    return `# ${data.title}
   ## Description
   ${data.description}
    ## **Table of Contents**
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    ${renderLicenseLink(data.license)}
    * [Contributing](#Contributing)
    * [Test](#Test)
    * [Email](#Email)
    
    
    ### **Installation**
    ${data.installation}
    ### **Usage**
    This application is used for ${data.usage}
    ### **License**
    ${renderLicenseBadge(data.license)}
    ${renderLicenseSection(data.license)}
    ### **Contributing**
    ${data.contribution}
    
    ### **Email**
    ${data.email}

    ## Github
    [GitHub Profile](https://github.com/${data.UserName})
  `;
  }
  
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (!license) {
      return "";
    } else {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return "";
    } else {
      return `* [License](##license)`;
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return "";
    } else {
      return `## License
      This project is licensed under the ${license}.`;
    }
  }
  
  module.exports = generateMarkdown;