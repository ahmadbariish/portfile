import React from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
const data = [
  {
    id: 1,
    image: Image1,
    title: 'UI/UX design',
    description:
      'Enhancing user interface to align with the latest web technology advancements, providing a smooth and enjoyable user experience. ',
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description:
      'Improving the frontend user interface to harmonize with the latest advancements in web technology, ensuring a seamless and delightful user experience.',
  },
  {
    id: 3,
    image: Image3,
    title: 'AI',
    description:
      'Enhancing the frontend user interface through the utilization of AI, to synchronize with the latest advancements in web technology, ensuring a seamless and delightful user experience.',
  },
];
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
