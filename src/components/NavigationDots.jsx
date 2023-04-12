import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, idx) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            key={item + idx}
            href={`#${item}`}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
