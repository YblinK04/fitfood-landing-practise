import { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./ui/Loading"


import { lazy } from "react";



const About = lazy(() => import("./components/About"));
const MenuSlider =lazy(() => import("./components/MenuSlider"));
const Benefits =lazy(() => import ("./components/Benefits"));
const Reviews = lazy(() => import("./components/Reviews"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"))


export default function page() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
            </main>

            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
              <MenuSlider />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
              <Benefits />
            </Suspense>

             <Suspense fallback={<Loading />}>
              <Reviews />
            </Suspense>

            <Suspense fallback={<Loading />}>
            <ContactForm />
            </Suspense>

             <Suspense fallback={<Loading />}>
            <Footer />
            </Suspense>




        </div>
    )
}
