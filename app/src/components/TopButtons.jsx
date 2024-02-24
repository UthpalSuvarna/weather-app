import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "Mangaluru",
    },
    {
      id: 2,
      title: "Moodabidri",
    },
    {
      id: 3,
      title: "Karkala",
    },
    {
      id: 4,
      title: "Mysuru",
    },
    {
      id: 5,
      title: "Bengaluru",
    },
    {
      id: 6,
      title: "Delhi",
    }
  ];
  return (
    <div className="flex flex-wrap justify-center my-6">
  {cities.map((city) => {
    return (
      <button
        key={city.id}
        className="m-2 px-4 py-2 text-white"
        style={{ minWidth: '100px' }} 
        onClick={()=>setQuery({q: city.title})}
      >
        {city.title}
      </button>
    );
  })}
</div>

  );
}

export default TopButtons;
