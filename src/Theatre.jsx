import React, { useState } from "react";
import "./Theatre.css";
import vidu from "./images/Viduthalai.jpeg";

const MoviePage = () => {
  const [activeTab, setActiveTab] = useState("showlisting");
  const [selectedDate, setSelectedDate] = useState("Thu 26");
  const [selectedFilters, setSelectedFilters] = useState({
    language: [],
    format: [],
    price: [],
  });

  
  const theaterData = {
    
    "Thu 26": [
      {
        name: "INOX Prozone Mall, Sathy Road, Coimbatore",
        facilities: "Food & Beverages • Parking • Digital Payments",
        showtimes: ["07:00 PM", "10:30 PM", "10:50 PM"],
      },
      {
        name: "PVR Cinemas, Brookefields, Coimbatore",
        facilities: "Luxury Seats • Parking • Dolby Atmos",
        showtimes: ["06:30 PM", "09:30 PM"],
      },
    ],
    "Fri 27": [
      {
        name: "KG Cinemas, Oppanakara Street, Coimbatore",
        facilities: "Food & Beverages • Parking",
        showtimes: ["05:00 PM", "08:30 PM", "11:00 PM"],
      },
      {
        name: "Baba Cinemas, RS Puram, Coimbatore",
        facilities: "Food & Beverages • Parking",
        showtimes: ["05:00 PM", "08:30 PM", "11:00 PM"],
      },
    ],
    "Sat 28": [
      {
        name: "Fun Mall Cinemas, Peelamedu, Coimbatore",
        facilities: "Food & Beverages • Parking",
        showtimes: ["05:00 PM", "08:30 PM", "11:00 PM"],
      },
      {
        name: "Miraj Cinemas, Neelambur, Coimbatore",
        facilities: "Food & Beverages • Parking",
        showtimes: ["05:00 PM", "08:30 PM", "11:00 PM"],
      },
    ],
    "Sun 29": [
      {
        name: "Cinepolis Fun Republic Mall, Coimbatore",
        facilities: "Food & Beverages • Recliner Seats",
        showtimes: ["03:00 PM", "06:00 PM", "09:00 PM"],
      },
      {
        name: "Rohini Cinemas, Gandhipuram, Coimbatore",
        facilities: "Luxury Seats • Parking • Dolby Atmos",
        showtimes: ["04:30 PM", "07:30 PM", "10:30 PM"],
      },
    ],
    "Mon 30": [
      {
        name: "Carnival Cinemas, Race Course, Coimbatore",
        facilities: "Parking • Dolby Digital Sound",
        showtimes: ["01:00 PM", "04:00 PM", "07:00 PM"],
      },
      {
        name: "PSR Cinemas, Pollachi Road, Coimbatore",
        facilities: "Food & Beverages • Parking",
        showtimes: ["12:30 PM", "03:30 PM", "06:30 PM"],
      },
    ],
    "Tue 31": [
      {
        name: "The Cinema, Singanallur, Coimbatore",
        facilities: "Parking • Recliner Seats • Food & Beverages",
        showtimes: ["02:00 PM", "05:00 PM", "08:00 PM"],
      },
      {
        name: "SPI Cinemas, Avinashi Road, Coimbatore",
        facilities: "Luxury Seats • Dolby Atmos",
        showtimes: ["03:00 PM", "06:30 PM", "09:30 PM"],
      },
    ],
    "Wed 01": [
      {
        name: "Sathyam Cinemas, Ram Nagar, Coimbatore",
        facilities: "Food & Beverages • Parking • Dolby Digital",
        showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"],
      },
      {
        name: "Abirami Cinemas, RS Puram, Coimbatore",
        facilities: "Recliner Seats • Food & Beverages",
        showtimes: ["12:00 PM", "03:30 PM", "07:00 PM"],
      },
    ],
  };

  
  const handleFilterChange = (category, value, isChecked) => {
    setSelectedFilters((prev) => {
      const updatedCategory = isChecked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value);

      return { ...prev, [category]: updatedCategory };
    });
  };

  return (
    <div className="movie-page">
      <div className="movie-header">
        <div className="movie-details">
          <h1>Viduthalai Part - 2</h1>
          <p>
            A • 2 hrs 46 mins <br />
            Action, Crime, Drama <br />
            Tamil
          </p>
          <button className="watch-trailer-btn">Watch Trailer</button>
        </div>
        <div className="movie-poster">
          <img src={vidu} alt="Viduthalai Part - 2" className="poster" />
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "showlisting" ? "active" : "" }`}
          onClick={() => setActiveTab("showlisting")}
        >
          Showlisting
        </button>
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews & More
        </button>
      </div>

      {activeTab === "showlisting" && (
        <>
          <div className="date-filters-row">
            <div className="date-picker">
              {["Thu 26", "Fri 27", "Sat 28", "Sun 29", "Mon 30", "Tue 31", "Wed 01"].map(
                (date, index) => (
                  <button
                    key={index}
                    className={`date ${selectedDate === date ? "selected-date" : ""}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <div>{date}</div>
                  </button>
                )
              )}
            </div>

            <div className="filters">
              <div className="filter-dropdown">
                <button className="dropdown-btn">Language</button>
                <div className="dropdown-options">
                  {["Tamil", "Hindi", "English"].map((lang) => (
                    <label key={lang}>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleFilterChange("language", lang, e.target.checked)
                        }
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-dropdown">
                <button className="dropdown-btn">Format</button>
                <div className="dropdown-options">
                  {["2D", "3D"].map((format) => (
                    <label key={format}>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleFilterChange("format", format, e.target.checked)
                        }
                      />
                      {format}
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-dropdown">
                <button className="dropdown-btn">Price</button>
                <div className="dropdown-options">
                  {["170", "200"].map((price) => (
                    <label key={price}>
                      <input
                        type="radio"
                        name="price"
                        onChange={(e) =>
                          handleFilterChange("price", price, e.target.checked)
                        }
                      />
                      {price}
                    </label>
                  ))}
                </div>
              </div>

              <label className="premium-seats">
                <input type="checkbox" />
                Premium Seats
              </label>
            </div>
          </div>

          <div className="theatre-listing">
            {theaterData[selectedDate] ? (
              theaterData[selectedDate].map((theater, index) => (
                <div className="theatre" key={index}>
                  <h3>{theater.name}</h3>
                  <div className="theatre-actions">
                    <button >Get Directions</button>
                    <button >More Info</button>
                  </div>
                  <p className="facilities">{theater.facilities}</p>
                  <div className="showtimes">
                    {theater.showtimes.map((time, idx) => (
                      <button className="showtime-btn" key={idx}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No theaters available for the selected date.</p>
            )}
          </div>
        </>
      )}

      {activeTab === "reviews" && (
        <div className="reviews-section">
          <h2>Plot</h2>
          <p>
            Viduthalai Part - 2 continues the gripping narrative of Part - 1,
            diving deeper into the story of freedom, sacrifice, and justice.
            This action-packed drama showcases intense performances and a
            compelling storyline.
          </p>
          <h2>Cast</h2>
          <ul>
            <li>Soori as Kumaresan</li>
            <li>Vijay Sethupathi as Vaathiyaar</li>
            <li>Bhavani Sre as Tamilarasi</li>
            <li>Gautham Vasudev Menon</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
















