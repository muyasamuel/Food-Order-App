import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export const SideBarData = [
    {
        title: 'Home',
        link: '/',
        icon: <FaHome />
    },
    {
        title: 'About',
        link: '/about',
        icon: <FaUserAlt />
    },
    {
        title: 'Contact',
        link: '/contact',
        icon: <MdContacts />
    }
]