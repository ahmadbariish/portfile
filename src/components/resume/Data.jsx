import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Data = [
  {
    id: 1,
    category: 'education',
    icon: <FontAwesomeIcon icon={faHouse} />,
    year: '2023 - present',
    title:
      "International University of Science and Renaissance ('Informatics Engineering').",
    desc: 'Level 4.',
  },
  {
    id: 2,
    category: 'education',
    icon: 'icon-graduation',
    year: '2020 - 2023',
    title: "Idilib Uinversity ('TCC').",
    desc: "l am proud to have graduated from the Technical Institute of Computer Science at ldlib University, where l earneda Bachelor's degree in Computer Science with a specialization in Software Engineering. ",
  },
  {
    id: 3,
    category: 'education',
    icon: 'icon-graduation',
    year: '2022 - 2024',
    title: 'ALX',
    desc: 'IT.',
  },
];

export default Data;
