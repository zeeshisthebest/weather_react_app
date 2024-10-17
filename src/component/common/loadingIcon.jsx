import React from 'react';


/**
 * A Loading Icon that fills the parent
 */
const LoadingIcon = () => {
    return (<div className="w-full h-full bg-black absolute top-0 left-0 z-auto bg-opacity-80 flex justify-center">
        <div className="grid [&>*]:col-span-1 [&>*]:row-span-1 justify-items-center items-center relative align-middle">
            <div className='w-20 absolute h-20 border-4 border-r-0 border-t-0 rounded-full animate-spin'></div>
            <div className='h-14 w-14 border-4 rounded-full absolute border-l-0 border-b-0 ronded-full animate-reverse-spin'></div>
            <div className="text-gray-100 text-3xl translate-y-20">Please wait, Loading...</div>
        </div>
    </div>
    );
}

export default LoadingIcon;
