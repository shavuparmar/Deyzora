import React, { Suspense, lazy } from 'react'
import Loader from './comon/Loader'

// Lazy load Home page
const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  )
}