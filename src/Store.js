import {configureStore} from '@reduxjs/toolkit'
import CardSlice from './Components/CardSlice'


const store = configureStore({
    reducer:{
        cards: CardSlice
    }
})

export default store