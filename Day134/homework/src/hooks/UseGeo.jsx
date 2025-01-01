import { useEffect } from "react";
import { useState } from "react";


const useGeo = () =>{
    const [currentLocation,setCurrentLocation] = useState({});

    useEffect(() => {
        const onSucces = (e) =>{
            setCurrentLocation({
                latitude: e.coords.latitude.toFixed(3),
                longitude: e.coords.longitude.toFixed(3)
            });
        }

        navigator.geolocation.getCurrentPosition(onSucces)
    },[])
    console.log(currentLocation)
    return(
        <>
            <h1>hi</h1>
        </>
    )
}
export default useGeo

