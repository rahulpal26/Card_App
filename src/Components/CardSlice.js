import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const fetchCarddata = createAsyncThunk(
'cards/fetchCarddata',
async() => {
    
    try{
          const cardresponse = await fetch('https://jsonplaceholder.typicode.com/posts');
          
          const data = await cardresponse.json();
          return data
    }catch(error){
           throw new Error('failed to fetch cards')
    }
}

)


const CardSlice = createSlice({
name:'cards',
initialState:{
    cards:[],
    loading:false,
    error:null
},
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(fetchCarddata.pending,(state)=>{
        state.loading = true
        state.error = null
    })
    builder.addCase(fetchCarddata.fulfilled,(state,action)=>{
        state.loading = false
        state.cards = action.payload;
        state.error = null
    })

    builder.addCase(fetchCarddata.rejected,(state,action)=>{
        state.loading = false
        state.error = action.error.message
    });

}

})

export default CardSlice.reducer;