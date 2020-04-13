function generateMarkdown(data) {
  return `
  # My GitHub username is: ${data.username}
  # Project Title:  ${data.title}
  # My image: ${data.image}
  # Github email: ${data.email}
  # Project Description: ${data.description}
  # Table of Contents:  Table of contents will go here.
  # Installation: ${data.installation}
  # Usage:  ${data.usage}

  # License will go here

  # Contributing will go here

  # Tests will go here

  # Questions will go here
  
`;
}

module.exports = generateMarkdown;
