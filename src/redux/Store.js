import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import {CartSlice} from './Slices/CartSlice'

 export const store = configureStore({
  reducer : {
              cart: CartSlice
  }
 })

