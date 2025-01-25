import React from 'react'
import CategoryTabs from '../CategoryTabs/CategoryTabs'
import AllMeals from '../AllMeals/AllMeals'


export default function Home() {

  return <> 
  <div className='container py-8 px-4'>
      <h1 className='text-4xl font-bold  bg-gradient-to-r from-primary   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>
        <CategoryTabs/>
        <AllMeals endpoint="search.php?s=" queryKey="allMeals"/>
  </div>
  </>
}
