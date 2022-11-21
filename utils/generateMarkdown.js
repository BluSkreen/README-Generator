// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license != "") {
    return `https://img.shields.io/badge/license-${license}-blue`;
  } else {
    return "";
  }
}

// returns the license link
// If there is no license, return link to help choose one
function renderLicenseLink(license) {
  if (license != "") {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return "https://choosealicense.com/";
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "") {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return "";
  }
}

// generate markdown for README
function generateMarkdown({title, description, usage, license}) {
  licenseBadge = renderLicenseBadge(license);
  licenseLink = renderLicenseLink(license);
  licenseSection = renderLicenseSection(license);
  return `# ${title}
![license badge](${licenseBadge})

${description}\${data.toc}\${data.install}

## Usage
${usage}\${data.credits}

## License
${licenseLink}
${licenseSection}
`;
}

module.exports = generateMarkdown;
