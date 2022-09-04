//  function that returns a license badge based on which license is passed in
function LicenseBadge(license) {
  //use switch statements to cut down on code
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
//function that grabs the liscense Link from user and puts it into LIcense section
function LicenseLink(license) {
  console.log(license);
  switch(license) {
    case "Apache 2.0 License":
      //add in code to grab link
      console.log("Apache chosen");
      return "(https://opensource.org/licenses/Apache-2.0)";
      
    case "BSD 3-Clause License":
      console.log("BSD chosen");
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      
    case "CC0":
      console.log("CC0 chosen");
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
      
    case "The Mit License":
      console.log("MIT chosen");
      return "(https://opensource.org/licenses/MIT)";
      
    default:
      console.log("something went wrong...");
  }
  
}

// function to generate markdown for README
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
  contributename = data.credit2
  contributeGH = data.credit3

  //Make clickable links to sections for TOC
  toc = `## **Table of Contents**
  \n [Description](#id-1)
  \n [Installation](#id-2)
  \n [Usage](#id-3)
  \n [Contributing](#id-4)
  \n [Liscense](#id-5)
  \n [Tests](#id-6)
  \n [Questions](#id-7) `;

  //building string that will generate the markdown/readme
  str = `# ${title} ${LicenseBadge(license)}
  \n ${toc}
  \n <h2 id="id-1">Description</h2> \n ${description} 
  \n <h2 id="id-2">Installation</h2> \n ${Install} 
  \n <h2 id="id-3">Usage \n Instructions </h2>: ${use1} \n Examples: ${use2}
  \n <h2 id="id-4">Contributing</h2> \n ${contribute}
  \n <h2 id="id-5">License</h2> \n <a href="(${LicenseLink(license)})">${license}</a>
  \n <h2 id="id-6">Tests</h2> \n ${tests}
  \n <h2 id="id-7">Questions</h2> \n GitHub:http://www.github.com/${github_name} 
  \n Email: ${email} 
    `;
  
  return str;
}

//exports this javascript page
module.exports = generateMarkdown;
