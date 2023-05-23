
const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?w=900&t=st=1684676994~exp=1684677594~hmac=d03d20750605cd4e4ec7bdc601eb35587cb880d6577480670a31263a0d874708")` }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;