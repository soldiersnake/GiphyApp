import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) =>{
        console.log(newCategory);
        
        // setCategories([ newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    };

    return (
    <>
     <h1>GifExpertApp</h1>

        <AddCategory
            // setCategories={ setCategories }
            onNewCategory = { ( value ) => onAddCategory( value ) }
        />

     <ol>
        { categories.map( categoria => {
            return <li key={categoria}>{categoria}</li>
        }) }
     </ol>
    </>
  )
}
