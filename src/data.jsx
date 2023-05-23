import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaCode,
} from 'react-icons/fa'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'

import onlineStore from './assets/online-store.png'
import pizzaStore from './assets/pizzaStore.png'
import gameStore from './assets/game-store.png'
import freeSun from './assets/freeSun.png'
import restarDent from './assets/restarDent.png'
import speakup from './assets/speackup.png'
import resource from './assets/resource.png'
import moidodir from './assets/moidodir.png'
import pizzaVue from './assets/pizzaVue.png'

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
    percentage: '50',
  },
  {
    id: 5,
    title: 'Vue',
    percentage: '50',
  },
]

export const portfolio = [
  {
    id: 1,
    img: onlineStore,
    title: 'React App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'House Staff',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/react-online-store"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="https://react-online-store-c4f67.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            FireBase
          </a>
        ),
      },
    ],
  },

  {
    id: 9,
    img: pizzaVue,
    title: 'Vue App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Delivery Food',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Vue',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/pizza-vue"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="https://pizza-vue-80860.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            FireBase
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: gameStore,
    title: 'React App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Game Store',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/game-store"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="https://game-store-56e45.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            FireBase
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: pizzaStore,
    title: 'React App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'React Pizza',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/pizza-store"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="https://pizza-store-575cb.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            FireBase
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: freeSun,
    title: 'Business Card Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'freeSun',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Scss JS',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/free-sun"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a href="https://freesun.md/" target="_blank" rel="noreferrer">
            FreeSun
          </a>
        ),
      },
    ],
  },

  {
    id: 5,
    img: restarDent,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Restar-Dent',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Scss JS',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/restar-dent"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="http://restar-dent.neppe.kz/"
            target="_blank"
            rel="noreferrer"
          >
            Restar-Dent
          </a>
        ),
      },
    ],
  },

  {
    id: 6,
    img: speakup,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Speakup',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Scss JS',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/speakup"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a href="https://speakup.kz/" target="_blank" rel="noreferrer">
            Speakup
          </a>
        ),
      },
    ],
  },

  {
    id: 7,
    img: resource,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Resource',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Scss JS',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/Resource"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="https://resource-3ec6b.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Firebase
          </a>
        ),
      },
    ],
  },

  {
    id: 8,
    img: moidodir,
    title: 'Online Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Moidodir',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Scss JS',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: (
          <a
            href="https://github.com/MihailDragni/moidodir"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: (
          <a
            href="https://moidodir-2fb19.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Firebase
          </a>
        ),
      },
    ],
  },
]
