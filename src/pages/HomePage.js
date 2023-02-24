import React,{useEffect,useState} from 'react'
import Layout from "../components/Layout"
import { useDispatch,useSelector } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktailSlice'
import SpinnerAnim from '../components/shared/SpinnerAnim'
import { Link } from 'react-router-dom'
import SearchBox from '../components/SearchBox'

const HomePage=()=>{
    const {loading,cocktails,error} =useSelector(state=>({...state.app}))
    const dispatch= useDispatch();
    const [modifiedCoctails, setmodifiedCocktails]=useState([]);
    
    useEffect(()=>{
        dispatch(fetchCocktails())
    },[])
    useEffect(()=>{
        if(cocktails){
            const newCocktails= cocktails.map(item=>{
                const {idDrink,strDrink,strGlass,strDrinkThumb,strAlcoholic}=item;
                return{
                    id:idDrink,
                    name:strDrink,
                    img:strDrinkThumb,
                    glass:strGlass,
                    info:strAlcoholic
                }
            })
            setmodifiedCocktails(newCocktails)

        }else{
            setmodifiedCocktails([]);
        }
        


    },[cocktails])
    if(loading){
        return <SpinnerAnim/>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    if(!cocktails){
        return(
            <Layout>
                <h2>No cocktail found with this name</h2>
            </Layout>
        )
    }
    return(
        <>
            
            <div className='container'>
               
                <div className='row'>
                {
                    modifiedCoctails.map(item=>(
                        <div className='col-md-3 mt-3 m-1 ' key={item.id}>
                            <div className="card" style={{width: '18rem'}}>
                                <img src={item.img} className="card-img-top" alt={item.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h5 className="card-title">{item.glass}</h5>
                                    <p className="card-text">{item.info}</p>
                                    <Link to={`/products/${item.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>


                        </div>
                    ))
                }

                </div>

            </div>
            
        </>
    )
}
export default HomePage