import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () =>{
        setCategories(['Digimon', ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    };

    return (
    <>
     <h1>GifExpertApp</h1>

        <AddCategory/>
         <button onClick={ onAddCategory }>Agregar</button>
     <ol>
        { categories.map( categoria => {
            return <li key={categoria}>{categoria}</li>
        }) }
     </ol>
    </>
  )
}
