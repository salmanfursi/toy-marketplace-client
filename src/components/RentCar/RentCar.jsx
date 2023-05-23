
const RentCar = () => {
    return (
      <div className="lg:flex justify-around items-center mt-12 p-7 gap-5 border-2">
        <div className="lg:w-1/2 space-y-5" data-aos="zoom-in-up">
          <h1 className=" font-bold text-5xl ">
            <span className="text-black-600"> The best way to </span> <br />
            <span className="text-green-500">Rent A Car</span>
          </h1>
          <p className="text-xl">
            car is most favourite for baby they always wnna car to ride or polaying with car .my brother also demand car for playing but i cant buy car for him .
          </p>
          <button className="  mr-4 gap-2 px-7 py-3  bg-gradient-to-r from-orange-500 to-indigo-500 text-white shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
            Submit
          </button>
        </div>

        <div className="w-">
          <img src="https://img.freepik.com/free-photo/little-baby-girl-playing-car_155003-6783.jpg?w=900&t=st=1684678683~exp=1684679283~hmac=9154147d272f01f11a9202eb4198d95b3d97bd2a7a8d1c3b650c1d86b72e069a" alt="" />
        </div>
      </div>
    );
};

export default RentCar;