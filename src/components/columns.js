import {format} from 'date-fns'
export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: "Name",
        columns: [
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: "Details",
        columns: [
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Date Of Birth',
                accessor: 'date_of_birth',
                Cell: ({value}) => {
                return format(new Date(value), 'dd/MM/yyyy')
                }
            },
            {
                Header: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            }]
    }
]
