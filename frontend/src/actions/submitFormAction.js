import fetch from 'isomorphic-fetch';

export default function submitAction(name, url) {
  return (body, callback) => async (dispatch) => {
    try {
      console.log(body);
      const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'X-Key-Inflection': 'snake',
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch({
        type: `${name.toUpperCase()}_SUBMIT_SUCCESS`,
        data
      });
      if (callback) {
        callback(data, dispatch);
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: `${name.toUpperCase()}_SUBMIT_FAILURE`,
        error
      });
    }
  };
}
