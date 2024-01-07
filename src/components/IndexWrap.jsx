import React from "react";
import ApiProvider from "@/ApiRequest/ApiProvider";
import SliderData from "../components/Slider/SliderData";
import SliderDataTwo from "./Slider/SliderDataTwo";
export default function IndexWrap() {
  return (
    <ApiProvider>
      <SliderData />
      <SliderDataTwo />
    </ApiProvider>
  );
}
