import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("sports");
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b7a11-toy-marketplace-server-side-salmanfursi.vercel.app/toys/category/${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((err) =>
        console.error("Error fetcing toys based on sub category", err)
      )
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <div className="lg:my-12 lg:mx-48 text-4xl font-bold mt-12 mr-5">
      <Tabs>
        <TabList>
          <Tab onClick={() => setSelectedCategory("sports")}>Sports </Tab>
          <Tab onClick={() => setSelectedCategory("mini_fire_truck")}>
            Mini fire truck
          </Tab>
          <Tab onClick={() => setSelectedCategory("mini_police_car")}>
            Mini police car
          </Tab>
        </TabList>

        <TabPanel className="mt-16">
          {loading ? (
            <span>Loading....</span>
          ) : (
            <div className=" grid grid-cols-1 lg:grid-cols-2">
              {toys?.map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>

                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel className="mt-16">
          {loading ? (
            <span>Loading....</span>
          ) : (
            <div className=" grid grid-cols-1 lg:grid-cols-2">
              {toys?.map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel className="mt-16">
          {loading ? (
            <span>Loading....</span>
          ) : (
            <div className=" grid grid-cols-1 lg:grid-cols-2">
              {toys?.map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
