import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import * as moment from 'moment';
import { addNewEmployee, getAllEmployees } from '../../../../../actions/EmployeesActions';
import { Employee } from '../../../../../Models/Employee';
import { checkFreeDay } from '../../../../../components/checkFreeDay';

type Props = {
  employees: [];
  loaded: boolean;
  getAllEmployees(): void;
  addNewEmployee: ({}: Employee) => void;
}
// const nameType:"name" = "name";
// const lastNameType:"lastName" = "lastName";
// const contractType:"contract" = "contract";
// const keyType:"key" = "key";
// const dateStartType: "dateStart" = "dateStart";
// const dateStopType: "dateStart" = "dateStart";

class EmployeesList extends React.Component<Props> {

  public columnsForTable = [
    {
      title: 'Imię',
      dataIndex: 'name' as 'name',
      key: 'name',
      sorter: (a: any, b: any) => {
        return a.name.toString().localeCompare(b.name.toString());
      },

    }, {
      title: 'Nazwisko',
      dataIndex: 'lastName' as 'lastName',
      key: 'lastName',
    }, {
      title: 'Rodzaj umowy',
      dataIndex: 'contract' as 'contract',
      key: 'contract',
      render: (record: string) => {
        switch (record) {
          case "UoP":
            return "Umowa o prace";
          case "UoD":
            return "Umowa o dzieło";
          case "UnZ":
            return "Umowa na zlecenie";
          default:
              return "Inna umowa";
        }
      }
    }, {
      title: 'Data rozpoczęcia pracy',
      dataIndex: 'dateStart' as 'dateStart',
      key: 'dateStart',
      render:(record: number)=>{
        return moment.unix(record).format("DD-MM-YYYY");
      },
    }, {
      title: 'Data zakończenia pracy',
      dataIndex: 'dateStop' as 'dateStop',
      key: 'dateStop',
      render:(record: number)=>{
        return record ? moment.unix(record).format("DD-MM-YYYY") : "-";
      },
    },{
      title: 'sprawdzenie daty',
      dataIndex: 'dateStart' as 'dateStart',
      key: 'dateStop1',
      render:(record: number)=>{
        return checkFreeDay(record);
      },
    }
  ];
  private paginationConfig = {
    showSizeChanger: true, size: 'large', pageSizeOptions: ['10', '20', '30', '40'], showTotal: (total: any) => {
      return (<div className='show-number-of-results'>
        {this.props.employees.length} pracowników
      </div>);
    },
  };

  public componentDidMount() {
    this.props.getAllEmployees();
  }

  public addNewEmployee = async () => {
    await this.props.addNewEmployee({
      name: 'Eugeniusz',
      lastName: 'Styczniowy',
      dateStart: moment("2019-1-1").unix(),
      contract: 'UoD',
    });
    await this.props.getAllEmployees();
  };

  public render() {
    console.log('RENDER', this.props.loaded);
    const { employees } = this.props;
    console.log('employees', employees);
    if (employees === undefined) {
      return <section>Brak danych</section>;
    }
    return (
      <div>
        {this.props.loaded ?
          'Loading' :
          <section>
            <Table<Employee>

              // rowSelection={this.rowSelectionConfig}
              columns={this.columnsForTable}
              // dataSource={[
              //   { name: 'Jan', lastName: 'kowal', key: 'asd' },
              //   { name: 'Jan2', lastName: 'kraw', key: 'asdf'}
              //   ]}
              dataSource={employees}
              // dataSource={this.filterSearch()}
              pagination={this.paginationConfig}
            />

            {/*{employees.map((e: Employee) =>*/}
              {/*<p key={e.key}>{e.name} {e.lastName}</p>,*/}
            {/*)}*/}
          </section>
        }
        <button onClick={this.addNewEmployee}>Dodaj</button>
      </div>
    );
  }
}

type mapStateToProps = {
  EmployeesReducers: {
    employees: [];
    loaded: boolean;
  }
}
const mapStateToProps = (
  {
    EmployeesReducers: { employees, loaded },
  }: mapStateToProps,
) => (
  {
    employees,
    loaded,
  }
);
const mapDispatchToProps = {
  getAllEmployees,
  addNewEmployee,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);