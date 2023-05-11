import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaCode,
} from 'react-icons/fa'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'

import Work1 from './assets/project-1.jpeg'
import Work2 from './assets/project-2.jpg'
import Work3 from './assets/project-3.jpeg'
import Work4 from './assets/project-4.jpeg'
import Work5 from './assets/project-5.jpg'
import Work6 from './assets/project-6.jpg'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className="nav__icon" />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className="nav__icon" />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className="nav__icon" />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: '/contact',
  },
]

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mihail',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Dragni',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Moldova',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+37379737039',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mihaildragnidev@gmail.com',
  },

  {
    id: 9,
    title: 'Langages : ',
    description: 'Russian, English, Turkish, Kazakh',
  },
]

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '27+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '15+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '6+',
    title: ' Awards <br /> Won',
  },
]

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

	{
    id: 2,
    title: 'Scss',
    percentage: '90',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '70',
  },
  {
    id: 5,
    title: 'Vue',
    percentage: '30',
  },
]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
]
