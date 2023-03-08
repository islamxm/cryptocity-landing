import { useEffect } from "react";
import ApiService from "@/service/apiService";


const service = new ApiService();

const ruCnt = ['AZ', 'AM', 'BY', 'KZ', 'KG', 'MD', 'RU', 'TM', 'TJ', 'UZ', 'UA']


const CheckLoc = ({children}: {children: React.ReactNode}) => {
    

    useEffect(() => {
        service.getIp().then(res => {
            // console.log(res)
            if(ruCnt.find(i => i === res?.country_code)) {
                return
            } else {
                
            }

        })
    }, [])

    return (    
        <>
        {children}
        </>
    )
}

export default CheckLoc;