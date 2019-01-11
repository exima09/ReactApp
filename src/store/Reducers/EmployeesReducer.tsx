import { employeesConstants } from "../../constans/EmployeesConstants";

const initialState = {
  employees: [],
  loaded: true,
};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case employeesConstants.GET_ALL_EMPLOYEES:
      console.log('REDU', action.data);
      return {
        ...state,
        employees: action.data,
        loaded: false,
      };
    case employeesConstants.ADD_NEW_EMPLOYEES:
      return {
        ...state
      };
    default:
      return state;
  }
}