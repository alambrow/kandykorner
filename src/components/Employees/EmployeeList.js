import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { EmployeeContext } from "./EmployeeProvider.js"
import "./employees.css"

export const EmployeeList = () => {
    const { employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Employees</h2>
        <button onClick={
            () => history.push("/employees/create")
        }>New Employee</button>
        <section className="employees">
            {
                employees.map(employee => {
                    return (
                        <div className="employee" key={employee.id}>
                            <div className="employee__name">
                                { employee.name }
                            </div>
                            <div className="employee__location">
                                { employee.location.address }
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}