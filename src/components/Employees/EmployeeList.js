import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider.js"
import "./employees.css"

export const EmployeeList = () => {
    const { employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
        <section className="employees">
            {
                employees.map(employee => {
                    return (
                        <div className="employee" key={employee.id}>
                            <div className="employee__name">
                                { employee.name }
                            </div>
                            <div className="employee__location">
                                { employee.locationId}
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}