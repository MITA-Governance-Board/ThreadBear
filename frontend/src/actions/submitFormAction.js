import fetch from 'isomorphic-fetch';

export default function submitAction(name, url) {
  return body => async (dispatch) => {
    try {
      console.log(body);
      
      const response = await fetch(url, { method: 'POST', body });
      const data = await response.json();
      dispatch({
        type: `${name.toUpperCase()}_SUBMIT_SUCCESS`,
        data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: `${name.toUpperCase()}_SUBMIT_FAILURE`,
        error
      });
    }
  }
}