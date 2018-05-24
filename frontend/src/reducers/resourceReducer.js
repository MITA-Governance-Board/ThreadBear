import _ from 'lodash';

export default function resourceAction(resourceName, reqTypes = ['get', 'list', 'delete', 'update']) {
  return (state = {}, action) => {
    switch (action.type) {
      case `${_.snakeCase(resourceName).toUpperCase()}_LIST_SUCCESS`:
        return _.keyBy(action.data, r => r._id.$oid || r._id);
      case `${_.snakeCase(resourceName).toUpperCase()}_GET_SUCCESS`:
        return { ...state, [action.data._id]: action.data };
      default:
        return state;
    }
  };
}
