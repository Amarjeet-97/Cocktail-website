import React, {useState,useEffect,useRef} from 'react';

import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../redux/features/cocktailSlice';
const SearchBox=()=>{
    const SearchTerm=useRef();
    const dispatch= useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleChange= ()=>{
        const searchText=SearchTerm.current.value;
        dispatch(fetchSearchCocktail({searchText}))
        
    }
    return(
        <>
            <div className='d-flex flex-column align-item-center justify-content-center mt-4'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        ref={SearchTerm}
                        placeholder="Search here"
                        onChange={handleChange}
                         />
                         
                         
                    </div>
                </form>
            </div>

        </>
        
    )

}
export default SearchBox

