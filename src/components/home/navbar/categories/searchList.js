import React from 'react';
import CategoriesShop from '../../categories-shop/categoriesShop';

const SearchList = ({ filteredPersons }) => {

    const filtered = filteredPersons.map( person => 
        <Card key = {person.id} person = {person}/>)

  return (
    <div>
        {filtered}
    </div>
  )

  
}

export default SearchList;

