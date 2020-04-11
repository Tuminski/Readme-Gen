function generateMarkdown(data) {
  return `
  # My GitHub username is: ${data.username}
  # Project Title:  ${data.title}
  # Project Description: ${data.description}
`;
}

module.exports = generateMarkdown;
