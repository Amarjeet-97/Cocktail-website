import React,{useEffect,useState} from "react";
import Layout from "../components/Layout"
import { Link,useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../redux/features/cocktailSlice";
import { useDispatch,useSelector } from "react-redux";
import SpinnerAnim from "../components/shared/SpinnerAnim";
const ProductDetails=()=>{
    const [modifiedCoctail,setmodifiedCocktail]= useState([]);
    const dispatch= useDispatch();
    const {id}=useParams();
    const {loading,cocktail}= useSelector(state=>({...state.app}))
    useEffect(()=>{
        dispatch(fetchSingleCocktail({id}))
    },[dispatch,id])
    
    useEffect(()=>{
        if(cocktail.length>0){
            const {strDrink:name,
                strCategory:category,
                strAlcoholic:info,
                strGlass:glass,
                strDrinkThumb:img,
                strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=cocktail[0];
            const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
            const newCocktail= {name,category,info,glass,img,ingredients}
            setmodifiedCocktail(newCocktail);

        } else{
            setmodifiedCocktail(null)
        }
    },[id,cocktail])
    if(!modifiedCoctail){
        return <h2>No cocktails Details found</h2>
    }
    else{
        const { name, img, info, category, glass, ingredients } = modifiedCoctail;
        return(
            <>
                {
                    loading? <SpinnerAnim/>:(

                    <Layout>
                        <div className="container mt-4">
                            <Link to="/" className="btn btn-info">GO BACK</Link>
                            <div className="row mt-4">
                                <div className="col-md-5">
                                    <img src={img} alt={name} height={300} width={400}/>

                                </div>
                                <div className="col-md-5">
                                    <h2>Name: {name}</h2>
                                    <p>Category: {category}</p>
                                    <p>Info: {info}</p>
                                    <p>Glass: {glass}</p>
                                    <p>Ingridents: {ingredients+","}</p>

                                </div>

                            </div>

                        </div>
                        
                    </Layout>)
                }
            </>
        )
    }
    
    
}
export default ProductDetails