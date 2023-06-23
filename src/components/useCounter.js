
import { useState } from 'react'

const useCounter= () => {
  
    const [geoLoc, setGeoLoc] = useState(0)

    const increment =() => {
  
      // setGeoLoc((geoLoc <= 2)? geoLoc+1 : 0)

      setGeoLoc(geoLoc + 1) 
  
    }

    const reset = () => {
      setGeoLoc(0)
    }

    return {
      geoLoc,
      increment,
      reset
    }
  
  
}

export default useCounter
