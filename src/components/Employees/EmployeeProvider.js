import React, {useState, createContext} from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then (res => res.json())
        .then (setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then (res => res.json())
        .then(getEmployees)
    }

    const updateEmployee = employObj => {
        return fetch(`http://localhost:8088/employees/${employObj.id}?_expand=location`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employObj)
        })
        .then(res => res.json())
        .then(getEmployees)
    }

    const releaseEmployee = employeeId => {
        return fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: "DELETE"
        })
        .then (getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, updateEmployee, releaseEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}