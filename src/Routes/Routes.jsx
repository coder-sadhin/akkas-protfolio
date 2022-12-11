import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Sites from '../Components/Sites/Sites';
import Main from '../Main';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import Skills from '../Components/Skills';
import WorkSample from '../Components/WorkSample';
import Projects from '../Components/Projects';
import Blogs from '../Components/Blogs';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/work',
                element: <WorkSample />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
    {
        path: '/sites',
        element: <Sites />
    }
]);

export default Routes;