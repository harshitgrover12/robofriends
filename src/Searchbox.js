import React from 'react';
const Searchbox=({SearchField,SearchChange})=>{
	return(
<div className="pa2">
<input className="pa3 ba b--green bg-lightest-blue" 
type='search'
placeholder='Search robots'
onChange={SearchChange}

/>
</div>

		);
}
export default Searchbox;