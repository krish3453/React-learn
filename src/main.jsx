import React from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App.jsx'
import compo from './Compo.jsx'

const root=createRoot(document.getElementById('root'))
root.render(<App/>)