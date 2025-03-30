'use client'

const VideoSection = () => {
    return (
        <section className="w-full h-[400px] flex justify-center items-center ">
            <div className="w-full  h-full">
                <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/AtLqyDmTefk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default VideoSection;
