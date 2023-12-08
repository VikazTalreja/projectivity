import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import ellipse from "../../assets/Images/JohnDoe.png";
import vector from "../../assets/Images/Ellipse 5.svg";

export const Profile = ({
  property1,
  vector = "vector.svg",
  ellipse = "ellipse.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[240px] h-[60px] ${
        ["default", "hover"].includes(state.property1) ? "rounded-[40px]" : ""
      } ${
        state.property1 === "default"
          ? "bg-[#e6e6e6]"
          : state.property1 === "hover"
          ? "bg-[#b9b9b9]"
          : ""
      } ${["default", "hover"].includes(state.property1) ? "relative" : ""}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["default", "hover"].includes(state.property1) && (
        <>
          <img
            className="w-[22px] left-[196px] top-[25px] h-[13px] absolute"
            alt="Vector"
            src={state.property1 === "hover" ? ellipse : vector}
          />
          <img
            className="w-[50px] left-[15px] top-[5px] object-cover h-[50px] absolute"
            alt="Ellipse"
            src={state.property1 === "hover" ? "image.png" : ellipse}
          />
          <div className="w-[120px] left-[74px] top-[7px] h-[44px] absolute">
            <div className="[font-family:'Inter-Regular',Helvetica] w-[120px] left-0 tracking-[0] text-[24px] top-0 text-black font-normal leading-[normal] absolute">
              John Doe
            </div>
            <div className="[font-family:'Inter-Regular',Helvetica] w-[88px] left-[16px] tracking-[0] text-[13px] top-[23px] text-black font-normal leading-[normal] absolute">
              Line Producer
            </div>
          </div>
        </>
      )}

      {state.property1 === "active" && (
        <div className="relative h-[150px] bg-[#e6e6e6] rounded-[40px]">
          <img
            className="absolute w-[240px] h-px top-[107px] left-0 object-cover"
            alt="Line"
            src="line-2.svg"
          />
          <div className="absolute top-[118px] left-[36px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
            Logout
          </div>
          <div className="absolute w-[70px] top-[77px] left-[27px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
            Edit Profile
          </div>
          <img
            className="absolute w-[22px] h-[13px] top-[25px] left-[196px]"
            alt="Vector"
            src="vector-2.svg"
          />
          <img
            className="absolute w-[50px] h-[50px] top-[5px] left-[15px] object-cover"
            alt="Ellipse"
            src="ellipse-5-2.png"
          />
          <div className="absolute w-[120px] h-[44px] top-[7px] left-[74px]">
            <div className="absolute w-[120px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
              John Doe
            </div>
            <div className="absolute w-[88px] top-[23px] left-[16px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
              Line Producer
            </div>
          </div>
          <img
            className="absolute w-[240px] h-px top-[64px] left-0 object-cover"
            alt="Line"
            src="line-1.svg"
          />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "hover") {
    switch (action) {
      case "click":
        return {
          property1: "active",
        };
    }
  }

  if (state.property1 === "active") {
    switch (action) {
      case "click":
        return {
          property1: "hover",
        };
    }
  }

  return state;
}

Profile.propTypes = {
  property1: PropTypes.oneOf(["hover", "active", "default"]),
  vector: PropTypes.string,
  ellipse: PropTypes.string,
};
