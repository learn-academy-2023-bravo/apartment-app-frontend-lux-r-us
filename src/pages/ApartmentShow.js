import mockApartments from "../mockApartments";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams();
  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );
  console.log("current apartment:", currentApartment);

  return (
    <div className="flex justify-center">
      <h1 className="flex justify-center">Your Selected Apartment ~</h1>
      <div
        className="mx-4 my-8 p-4 bg-white bg-opacity-10 rounded-lg shadow-lg max-w-sm flex-shrink-0"
        key={currentApartment.id}
      >
        <img
          src={currentApartment.image}
          alt="apartment"
          className="h-48 w-full object-cover rounded-lg mb-4"
        />
        <p className="text-base font-semibold text-white">
          {currentApartment.city}
        </p>
        <h3 className="text-lg  text-white">{currentApartment.state}</h3>
        <h3 className="text-lg  text-white">{currentApartment.street}</h3>
        <h3 className="text-lg text-white">UNIT: {currentApartment.unit}</h3>
        <h3 className="text-lg text-white">
          SQUARE FEET{currentApartment.square_footage}
        </h3>
        <h1 className="text-lg text-white">$: {currentApartment.price}</h1>
        <h3 className="text-lg text-white">
          BEDS: {currentApartment.bedrooms}
        </h3>
        <h3 className="text-lg text-white">
          BATHROOMS: {currentApartment.bathrooms}
        </h3>
        <h3 className="text-lg text-white mb-5">
          PETS: {currentApartment.pets}
        </h3>
        <NavLink
          to={`/apartments/${currentApartment.id}`}
          className="text-white bg-white bg-opacity-0 border border-white px-3 py-2  rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10"
        >
          View Profile
        </NavLink>
      </div>
    </div>
  );
};

export default ApartmentShow;
