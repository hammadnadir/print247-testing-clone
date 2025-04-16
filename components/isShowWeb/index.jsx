import React from 'react'
import { useSelector } from 'react-redux';

function IsShowWeb({ children }) {
    const { countryName, ip } = useSelector((state) => state.getCountry);
    return (
        <div>
            {
                ip === "116.58.20.234" || countryName?.toLowerCase()?.includes("america")  ?
                    children
                    :
                    <p>{countryName}{ip}</p>
            }
        </div>
    )
}

export default IsShowWeb