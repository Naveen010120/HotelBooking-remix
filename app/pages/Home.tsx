import { Exclusiveoffers } from "~/components/Exclusiveoffers";
import { FeatureDestination } from "~/components/FeatureDestination";

import { Hero } from "~/components/Hero";
import { NewLetter } from "~/components/NewLetter";
import { Testimonial } from "~/components/Testimonial";

export function Home(){
    return(
        <>
        

        <Hero />
        <FeatureDestination />
        <Exclusiveoffers />
        <Testimonial />
        <NewLetter />
       
        </>
    )
}