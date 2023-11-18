import React from "react";
import { IBillboard as BillboardType } from "@/types";

interface IBillboardProps {
  billboard: BillboardType;
}

export const revalidate = 0;

const Billboard = ({ billboard }: IBillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${billboard?.image_url})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {billboard?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
