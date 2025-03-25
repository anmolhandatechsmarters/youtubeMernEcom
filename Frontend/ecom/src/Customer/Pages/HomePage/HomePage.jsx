import React from 'react'
import MainCarousel from '../../Components/HomeCrosal/MainCroasal'
import HomeSectionCrosal from '../../Components/HomeSectionCroasal/HomeSectionCrosal'

// import {mens_kurta} from ""  
const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className="mt-10 space-y-10 py-20 flex flex-col justify-center ">
          {/* <HomeSectionCrosal data={mens_kurta} Selectionname={}/>
          <HomeSectionCrosal data={mens_kurts}/> */}
        </div>
        
    </div>
  )
}

export default HomePage