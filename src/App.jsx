

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Mandate from './pages/Mandate';
import Membership from './pages/Membership';
import MembershipForm from './pages/MembershipForm';
import RulesAndRegulations from './pages/RulesAndRegulations';
import SoleForm from './pages/SoleForm';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "mandate",
      element: <Mandate />,
    },
    {
      path: "member",
      element: <Membership />,
    },
    {
      path: "form",
      element: <MembershipForm />
    },
    {
      path: "rules",
      element: <RulesAndRegulations />,
    },
    {
      path: "soleform",
      element: <SoleForm />,
    },
    
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
