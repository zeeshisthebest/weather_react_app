import React from "react";
import { Skeleton } from "@mui/material";

const SkeletonOtherLocationCard = () => {
    return (
        <div className="bg-black bg-opacity-30 border border-gray-600 w-1/2 h-44 rounded-3xl p-4 box-border grid grid-cols-2 grid-rows-2 gap-2 items-center">
            <Skeleton
                variant="rectangular"
                sx={{ fontSize: "1rem", bgcolor: "grey.800" }}
                className="col-span-2 rounded-md"
                height={"100%"}
                width={"100%"}
                animation="wave"
            />
            <div className="col-span-2 pt-2 w-full">
                <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", bgcolor: "grey.800" }}
                />
                <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", bgcolor: "grey.800" }}
                />
            </div>
        </div>
    );
};

export default SkeletonOtherLocationCard;
