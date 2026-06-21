const BASE_URL = 'https://github.com/mahimasarajacob2007-ai/sensors-and-actuators-website-/tree/main';

export function generateGithubUrl(folderName) {
  return `${BASE_URL}/${encodeURIComponent(folderName)}`;
}
