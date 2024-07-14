import bgCoverImg from '../../assets/main.jpeg'

const Intro = () => {
    const bgImage = {
      backgroundImage: `url(${bgCoverImg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    };
    
    return (
        <section style={bgImage} className='h-screen' id="intro">
          <div className='bg-green-800 bg-opacity-50 w-full h-screen'>
          <div className="flex flex-col items-center pt-32 lg:h-[50rem] mx-auto container px-4 lg:flex-row">
            <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold text-gray-100 lg:text-4xl">PiFAM:<br /> Pinoy Family Meal AI Planner</h1>

                <p className="mt-4 text-gray-100 font-semibold text-justify w-[350px] md:w-[500px] "> is an AI-powered meal planner designed specifically for Filipino families! Meal planning can be a daunting task, especially for those with hectic schedules. Hence, PiFAM is born. This innovative platform uses latest chatgpt model to suggest meal options that are tailored to Filipino family's preferences.</p>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="w-full max-w-md bg-warm_beige rounded-lg dark:bg-gray-800">
                    <div className="px-6 py-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">SIGN IN</h2>

                        <form action="#">
                            <div className="mt-4">
                                <input className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address" />
                                <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password"/>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:underline">Forget Password?</a>

                                <button className="px-6 py-2 text-white font-bold transition-colors duration-300 transform bg-rhubarb_red rounded-md hover:bg-red-500">SIGN IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </section>
    );
  };

export default Intro

