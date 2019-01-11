import { employeesConstants } from '../constans/EmployeesConstants';
import axios from 'axios';
import { Employee } from '../Models/Employee';

function failure(error: any) {
  return { type: 'ERROR_EMPLOYEES_REQUEST', error };
}

function success(type:string, data: any) {
  return { type, data };
}

export const getAllEmployees = () => {
  return (dispatch: any) => {
    return axios.get(`https://react-stateless.firebaseio.com/settlement/employees.json`)
      .then(
        (employees: any) => dispatch(success(
          employeesConstants.GET_ALL_EMPLOYEES,
          Object.keys(employees.data).map((key) => {
            return {...employees.data[key], key}
          })
      ))).catch(
        (error: any) => dispatch(failure(error)),
      );
  };
};

export const addNewEmployee = (employees: Employee) => {
  return (dispatch: any) => {
    return axios.post(`https://react-stateless.firebaseio.com/settlement/employees/.json`, JSON.stringify(employees))
      .then(
        () => dispatch(success(
          employeesConstants.ADD_NEW_EMPLOYEES,"Add new employee"
        ))).catch(
        (error: any) => dispatch(failure(error)),
      );
  };
};
