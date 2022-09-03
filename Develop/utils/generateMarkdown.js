// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
  console.log(`LicenseBadge is running`);
  if(license == "Apache 2.0 License") {
    const licensebadge1 = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    console.log(`badge 1 was chosen`);
    return licensebadge1;
  }
  if(license == "BSD 3-Clause License"){
    const licensebadge2 =  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    console.log(`badge 2 was chosen`);
    return licensebadge2;
  }

  if(license == "CC0" ){
    const licensebadge3 = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    console.log(`badge 3 was chosen`);
    return licensebadge3;
  }

  if(license == "The Mit License" ){
  const licensebadge4 ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  console.log(`badge 4 was chosen`);
  return licensebadge4;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //creating variables from the user answers
  title =data.title;
  description =data.description;
  Install =data.install;
  use1 = data.use1;
  use2 = data.use2;
  license =data.license;
  contribute = data.contributions;
  tests =data.test;
  github_name =data.github;
  email =data.email;
  //debugging
  console.log(license);
  console.log(`writing the markdown`);
  //building string
  str = `# ${title} ${LicenseBadge(license)} 
    \n ## Description \n ${description} 
    \n ## Installation \n ${Install} 
    \n ## Usage \n Instructions: ${use1} \n Examples: ${use2}
    \n ## Contributing \n ${contribute}
    \n ## Tests \n ${tests}
    \n ## Questions \n GitHub: ${github_name} Email: ${email} 
    `;
  
  return str;
}

module.exports = generateMarkdown;
