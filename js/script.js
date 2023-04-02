// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 29 2023
// This file contains the JS functions for index.html

"use strict";

function calculateVolumeSurfaceArea() {
  // get side A from user input
  let sideA= parseFloat(document.getElementById("prism-side-a").value)

    // get side B from user input
  let sideB= parseFloat(document.getElementById("prism-side-b").value)
  
	// get the height from user input
  let height= parseFloat(document.getElementById("prism-height").value)


  //calculate the volume 
  let volume = sideA*sideB*height*(1/6);

  // display the volume and surface area
  
  document.getElementById('answer1').innerHTML = "The volume of your rectangular prism is " +volume.toFixed(2)+"cm<sup>3</sup>.";
}

