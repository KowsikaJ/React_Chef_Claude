import React from "react";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])   
    }
    
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="ingredient"  
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
