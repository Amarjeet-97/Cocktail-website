import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchCocktails=createAsyncThunk(
    "cocktail/fetchCoctails",
    async()=>{
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(
           (res)=>res.json()
        )
    }
)
export const fetchSingleCocktail= createAsyncThunk(
    "cocktail/fetchSingleCocktail",
    async({id})=>{
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>res.json())
    }
)
export const fetchSearchCocktail= createAsyncThunk(
    "cocktail/fetchSearchCocktail",
    async({searchText})=>{
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then((res)=>res.json())

    }
)
const cocktailSlice= createSlice({
    name:'cocktails',
    initialState:{
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[]
    },
    extraReducers:{
        [fetchCocktails.pending]:(state,action)=>{
            state.loading=true;
        },
        [fetchCocktails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks
        },
        [fetchCocktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        [fetchSingleCocktail.pending]:(state,action)=>{
            state.loading=true;
        },
        [fetchSingleCocktail.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktail=action.payload.drinks;
        },
        [fetchSingleCocktail.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        [fetchSearchCocktail.pending]:(state,action)=>{
            state.loading=true;
        },
        [fetchSearchCocktail.fulfilled]:(state,action)=>{
            state.loading=false
            state.cocktails=action.payload.drinks
        },
        [fetchSingleCocktail.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }

    }
})
export default cocktailSlice.reducer