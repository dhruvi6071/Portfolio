// import React from "react";

const videomodal = ({isOpen, onclose, videoSrc}) => {
    if(!isOpen){
        return null;
    }

    const isMobile = window.innerWidth < 640;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-80 transition-all">
            {/* <div className="relative sm:bg-white w-[95vw] h-[90vh] max-w-[1000px] max-h-[90vh] bg-white rounded-xl shadow-2xl p-4 flex items-center justify-center"> */}
                <div className={`relative ${
                    isMobile ? "w-screen h-screen bg-black p-0 rounded-xl shadow-2xl flex items-center justify-center" : "relative sm:bg-white w-[95vw] h-[90vh] max-w-[1000px] max-h-[90vh] bg-white rounded-xl shadow-2xl p-4 flex items-center justify-center"
                }`}>
                {/* Close Button - further out top-right */}
                <button
                    onClick={onclose}
                    // className="absolute -top-8 -right-8 bg-white text-3xl text-gray-700 hover:text-red-500 rounded-full p-2 shadow-lg transition"
                    className={`absolute ${
                        isMobile ? "top-2 right-4 z-50 text-white text-3xl hover:text-red-500 rounded-full p-2 shadow-lg transition" : "-top-8 -right-8 bg-white text-gray-700 text-3xl hover:text-red-500 rounded-full p-2 shadow-lg transition"
                    }`}
                    title="Close"
                >
                    &times;
                </button>

                {/* Video Player - fills modal */}
                <video
                    controls
                    autoPlay
                    // className="w-full h-full object-cover rounded-lg shadow-lg"
                    className={`${isMobile ? "w-screen h-screen transfrom rotate-90 object-contain" : "w-full h-full object-contain bg-gray-900"}`}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default videomodal;