import axios from 'axios'

export const getIssues = async (params) => {
  try {
    const response = await axios.get('https://api.github.com/repos/facebook/react/issues', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
      },
      params: params
    })

    return response;
  } 
  catch (error) {
    console.error(error);
    return console.error(error);
  }
}