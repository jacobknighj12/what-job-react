import React, { useState, useEffect } from "react";
var axios = require("axios");
export function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);

    useEffect(() => {
        axios.get("https://whatjobrailsapi.herokuapp.com/api/categories").then((res) => setCategories(res.data));
        console.log(localStorage.getItem('selectedCategory'));
        setSelectedCategory(localStorage.getItem('selectedCategory'));
        console.log(selectedCategory)
    }, []);
    function handleChange(event) {
        event.preventDefault();
        let newValue = event.target.value;
        setSelectedCategory(newValue);

        localStorage.setItem('selectedCategory', newValue);
        console.log(localStorage.getItem('selectedCategory'));
    }
    return (

        <>
            <heading>Job Categories</heading>

            <form>
                <div class="category-select">

                    <label>Choose a field:</label>



                    <select class="category-select" onChange={handleChange} value={selectedCategory} id="Jobs" name="Jobs" size="1">
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}</select>
                    <button><a href='/JobPosts'>Go</a></button>
                </div>
            </form><div className='category-display'>
                {categories.map((category) => (
                    <p key={category.id}>
                        <img src={`${category.id}-sm.jpg`} />

                        {category.name}
                    </p>

                ))}

            </div></>

    )
}