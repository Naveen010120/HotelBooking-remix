import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import "./tailwind.css";
import { ClerkApp } from "@clerk/remix";
import { LoaderFunction } from "@remix-run/node";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HotelRegistation } from "./components/HotelReg";
export const meta: MetaFunction = () => {
  return [
    { title: "Hotel Booking App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap",
  },{
    rel:'icon',
    href:'/favicon.svg'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export  function App() {
  const location=useLocation();
  const isOwnerPath=location.pathname.includes('owner');
  return (
    <>
    { !isOwnerPath&&  (
         <Header />
       ) }
      { false &&<HotelRegistation />}
  <Outlet />
  
  <Footer />
      
    
    </>
  )
  ;
}
export default ClerkApp(App);
