function generateMarkdown(data) {
    return `# ${data.title}
## Description
${data.description}
## **Table of Contents**
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Email](#email)
### **Installation**
${data.installation}
### **Usage**
${data.usage}
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
  
  
  function renderLicenseBadge(license) {
    if (!license) {
      return "";
    } else {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
  }
  
  function renderLicenseLink(license) {
    if (!license) {
      return "";
    } else {
      return `* [License](##license)`;
    }
  }
  
  function renderLicenseSection(license) {
    if (!license) {
      return "";
    } else {
      return `## License
      This project is licensed under the ${license}.`;
    }
  }
  
  module.exports = generateMarkdown;