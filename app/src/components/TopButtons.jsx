import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "Chicago",
    },
    {
      id: 4,
      title: "Houston",
    },
    {
      id: 5,
      title: "Phoenix",
    },
  ];
  return (
    <div className="flex items-center justify-center my-6">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            className="mx-2 px-4 py-2 text-white rounded-md"
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
