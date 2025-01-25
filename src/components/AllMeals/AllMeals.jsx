import React from 'react'
import Meal from '../meal/Meal'
import MealsSkeleton from './../mealsSkeleton/mealsSkeleton';
import useApi from './../../Hooks/useApi';
import { Navigate } from 'react-router-dom';

export default function AllMeals({endpoint , queryKey}) {


      
      const {isError , isLoading , data} = useApi(`https://www.themealdb.com/api/json/v1/1/${endpoint}`, queryKey)

      if(isError){return <Navigate to="/"/>}
      if(isLoading){
    
        return <> 
        <MealsSkeleton/>
        </>
      }
  return <> 
  
        <div className='meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20'>


        {data.data.meals.map(meal => <Meal key={meal.idMeal} mealData={meal}/>)}

        </div>
  
  </>
}
