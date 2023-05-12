
import { NavLink } from "react-router-dom";
import React from "react";

const ApartmentIndex = ({ apartments }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="text-2xl font-bold mb-6">
        Show all the pads: not protected
      </h2>
      {apartments?.map(
        ({
          id,
          street,
          unit,
          city,
          state,
          square_footage,
          price,
          bedrooms,
          bathrooms,
          pets,
          image,
          user_id,
        }) => (
          <div
            className="mx-4 my-8 p-4 bg-white bg-opacity-10 rounded-lg shadow-lg max-w-sm flex-shrink-0"
            key={id}
          >
            <img
              src={image}
              alt="apartment"
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <p className="text-base font-semibold text-white">{city}</p>
            <h3 className="text-lg  text-white">{state}</h3>
            <h3 className="text-lg  text-white">{street}</h3>
            <h3 className="text-lg text-white">UNIT: {unit}</h3>
            <h3 className="text-lg text-white">SQUARE FEET{square_footage}</h3>
            <h1 className="text-lg text-white">$: {price}</h1>
            <h3 className="text-lg text-white">BEDS: {bedrooms}</h3>
            <h3 className="text-lg text-white">BATHROOMS: {bathrooms}</h3>
            <h3 className="text-lg text-white mb-5">PETS: {pets}</h3>
            <NavLink
              to={`/apartments/${id}`}
              className="text-white bg-white bg-opacity-0 border border-white px-3 py-2  rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10"
            >
              View Profile
            </NavLink>
          </div>
        )
      )}
    </div>
  );
};

export default ApartmentIndex;
