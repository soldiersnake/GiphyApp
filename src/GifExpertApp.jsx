import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) =>{

        if( categories.includes(newCategory) ){

            alert('Ya existe la categoria');
            return;
        };
        
        setCategories([ newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    };

    return (
    <>
     <h1>GifExpertApp</h1>

        <AddCategory
            // setCategories={ setCategories } // eslo mismo que poner:    value => setCategories( value )
            onNewCategory = { ( event ) => onAddCategory( event ) }
        />

        { categories.map( category => (
            <GiftGrid
                key={ category }
                category={category}
            />
        )    
        ) }
     
    </>
  )
}
