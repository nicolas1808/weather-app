import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


const WelcomeScreen = ({children}) => {
  const myDivRef = useRef(null)
  const [vanta, setVanta] = useState(0)

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myDivRef.current
        })
      )
    }
    return () => {
      if (vanta) {
        vanta.destroy()
      }
    }
  }, [vanta])

  return (
    <div className='full' ref={myDivRef}>
      {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
  childen: PropTypes.node
}

export default WelcomeScreen
