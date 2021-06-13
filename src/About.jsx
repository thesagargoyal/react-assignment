import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {

  return (
    <>
        <Common name="Welcome to About Page" visit="/contact" btName="Contact Now" />
    </>
  );

}

export default About;