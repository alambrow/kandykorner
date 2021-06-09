import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { EmployeeContext } from "./EmployeeProvider.js"
import "./employees.css"

export const EmployeeList = () => {
    const { employees, getEmployees, releaseEmployee } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history = useHistory()

    const handleRelease = (event) => {
        releaseEmployee(parseInt(event.target.id))
        .then(() => {
            history.push("/employees")
        })
    }

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
                            <button id={employee.id} onClick={handleRelease}>Release Employee</button>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}