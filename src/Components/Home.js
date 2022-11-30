import React from "react";
import { Link } from "react-router-dom";
import FaQ from "./FaQ";
import bg1 from "./Media/bg-1.gif";
import bg2 from "./Media/bg-2.gif";

const Home = () => {
  return (
    <div>
      <section
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to <span className="text-warning">D</span><span className="text-orange-500">r</span><span className="text-amber-200">a</span><span className="text-lime-400">w</span><span className="text-green-300">i</span><span className="text-purple-400">n</span><span className="text-red-400">g</span><span className="text-white">-</span><span className="text-fuchsia-500">A</span><span className="text-fuchsia-900">p</span><span>p</span></h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to='/drawing' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="hero bg-lime-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={bg2}
              className="md:max-w-sm rounded-lg shadow-2xl" alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">About Us!</h1>
              <p className="py-6 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae expedita numquam laboriosam itaque quidem nemo sequi praesentium dignissimos voluptas perferendis! Deleniti fugiat, a quaerat ad est sed hic illo unde esse. Ratione minus suscipit, expedita officiis nisi deleniti? Nulla unde consequatur voluptate ipsum amet maiores ullam facere qui itaque ex, quasi natus quia doloribus adipisci quos. Veniam officia harum vitae perspiciatis dolorum, dolore perferendis at quod animi veritatis adipisci, suscipit optio corporis porro dignissimos nobis totam est voluptates soluta ducimus, officiis ipsam! Natus nobis sed sequi nesciunt, neque enim iste excepturi modi magnam nulla, perferendis voluptas. Perferendis laborum voluptatibus quibusdam.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-info-content -mt-5 pb-2">
        <FaQ></FaQ>
      </section>
    </div>
  );
};

export default Home;
