import fetch from 'isomorphic-fetch';
import _ from 'lodash';

export default function resourceAction(resourceName, reqTypes = ['get', 'list', 'delete', 'update']) {
  const resource = {
    list: () => async (dispatch) => {
      try {
        const response = await fetch(`/${resourceName}`);
        const data = await response.json();
        dispatch({
          type: `${resourceName.toUpperCase()}_LIST_SUCCESS`,
          data
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: `${resourceName.toUpperCase()}_LIST_FAILURE`,
          error
        });
      }
    },
    get: id => async (dispatch) => {
      try {
        const response = await fetch(`/${resourceName}/${id}`);
        const data = await response.json();
        dispatch({
          type: `${resourceName.toUpperCase()}_GET_SUCCESS`,
          data
        });
      } catch (error) {
        dispatch({
          type: `${resourceName.toUpperCase()}_GET_FAILURE`,
          error
        });
      }
    },
    delete: id => async (dispatch) => {
      try {
        const response = await fetch(`/${resourceName}`);
        const data = await response.json();
        dispatch({
          type: `${resourceName.toUpperCase()}_DELETE_SUCCESS`,
          data
        });
      } catch (error) {
        dispatch({
          type: `${resourceName.toUpperCase()}_DELETE_FAILURE`,
          error
        });
      }
    },
    update: element => async (dispatch) => {
      try {
        const response = await fetch(`/${resourceName}`);
        const data = await response.json();
        dispatch({
          type: `${resourceName.toUpperCase()}_UPDATE_SUCCESS`,
          data
        });
      } catch (error) {
        dispatch({
          type: `${resourceName.toUpperCase()}_UPDATE_FAILURE`,
          error
        });
      }
    }
  };
  return _.pick(resource, reqTypes);
}
