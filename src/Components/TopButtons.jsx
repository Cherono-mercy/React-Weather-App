import React from 'react'

function TopButtons() {
    const cities =[
        {
            id: 1,
            title: "Nairobi"
        },
        {
            id: 2,
            title: "Mombasa"
        },
        {
            id: 3,
            title: "London"
        },
        {
            id: 4,
            title: "Sydney"
        },
        {
            id: 5,
            title: "Tokyo"
        },
    ]
  return (
    //Looping through the cities array to display them at the top bar
    <div className='flex items-center justify-around my-6'>
     {cities.map((city) => (
        <button className='text-white text-lg font-medium' key={city.id}>{city.title}</button> //Adding key prop to cities list
     ))}   
    </div>

  )
}

export default TopButtons