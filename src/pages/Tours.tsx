import React from 'react';
import TourList from "../components/FeaturedTourList";
import Subtitle from "../shared/Subtitle";

const Tours: React.FC = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Subtitle subtitle={"Explore"} />
          <h2 className="text-3xl font-semibold">Our featured tours</h2>
        </div>
        <TourList />
      </div>
    </section>
  );
};

export default Tours;
