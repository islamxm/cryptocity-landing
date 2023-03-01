import { useEffect } from "react";
 
import ApiService from "@/service/apiService";


const service = new ApiService();


const CheckLoc = ({children}: {children: React.ReactNode}) => {
    

    // useEffect(() => {
    //     service.getIp().then(res => {
    //         console.log(res)

    //     })
    // }, [])

    return (    
        <>
        {children}
        </>
    )
}

export default CheckLoc;