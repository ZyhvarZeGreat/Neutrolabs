import React, { Suspense } from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "../types/interfaces";
import Property_Card_Skeleton from "./PropertyCardSkeleton";

type Props = {
  properties: Property[]
};

const FundedProperties = ({properties}:Props) => {


  return (
    <div className=" flex w-full items-center justify-center ">
      <div className=" grid w-full grid-cols-12 flex-col place-content-center place-items-center  items-center justify-center justify-items-center gap-8 pb-6">
        <Suspense fallback={<Property_Card_Skeleton />}>

          {
            properties.map((property:Property,i:number)=>{
              return (
                <PropertyCard
                  property={property}
                  key={i}

                />
              )
            })

          }
        </Suspense>

      </div>
    </div>
  );
};

export default FundedProperties;
