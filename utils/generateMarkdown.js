// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license != "") {
    // the badge needs double "-" for the license name
    if (license.includes("-")) {
      license = license.replace(/-/g, "--");
    }
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
function generateMarkdown({ title, description, usage, license, other, install, credits, contribute }) {
  // prepare licenses
  licenseBadge = renderLicenseBadge(license);
  licenseLink = renderLicenseLink(license);
  licenseSection = renderLicenseSection(license);

  // prepare table of contents and add headers 
  // table of contents is concatinated in the order of placement on the README
  var toc;
  toc = "## Table of Contents";
  toc += "\n[Description](##Description)\n";
  description = "## Description\n" + description;
  // parameter doesnt have info to display then make it blank
  if (install != undefined) {
    install = "\n## Install\n" + install;
    toc += "\n[Install](##Install)\n";
  } else {
    install = "";
  }
  if (credits != undefined) {
    credits = "\n## Credits\n" + credits;
    toc += "\n[Credits](##Credits)\n";
  } else {
    credits = "";
  }
  if (contribute != undefined) {
    contribute = "\n## Contribute\n" + contribute;
    toc += "\n[Contribute](##Contribute)\n";
  } else {
    contribute = "";
  }
  toc += "\n[Usage](##Usage)\n";

  // if there is no table of contents then make it blank
  if (!other.includes("Table of Contents")) {
    toc = "";
  }

  return `# ${title}
![license badge](${licenseBadge})

${toc}${description}${install}

## Usage
${usage}${credits}${contribute}

## License
${licenseLink}
`;
}

module.exports = generateMarkdown;
