// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Implement the code to return the license badge based on the license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Implement the code to return the license link based on the license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Implement the code to return the license section based on the license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license);
  return `# ${data.title}
  ${licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  - [User Story](#user-story)
  - [Description](#description)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Question](#question)
  - [License](#license)
  ## User Story
  ${data.userStory}
  ## Acceptance Criteria
  ${data.acceptanceCriteria}
  ## Installation
  ${data.installations}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Question
  ${data.question}
  ## License
  ${licenseSection}
  ${licenseLink}
  `;
}

module.exports = generateMarkdown;

