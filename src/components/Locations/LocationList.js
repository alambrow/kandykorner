import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <section className="locations">
                {
                    locations.map(location => {
                        return (
                        <>
                            <div className="locat__address">
                                Address: {location.address}
                            </div>
                            <div className="locat__footage">
                                Size: {location.footage}
                            </div>
                            <div className="locat__access">
                                Accessible? { String(location.access)}
                            </div>
                        </>
                        )
                    })
                }
            </section>
        </>
    )
}