import Link from 'next/link'
import './styles.css'

import { FaHome } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaList } from "react-icons/fa";

export const Aside = () =>{
    return (
        <aside>
            <h1 className='logo'>DashBoard</h1>

            <ul>
                <li><Link href='/'><FaHome /> Home</Link></li>
                <li><Link href='/Registro'><FaList /> Registrar empresa</Link></li>
                <li><Link href='/Editar'><FaPen /> Editar empresa</Link></li>
                <li><Link href='/Excluir'><FaTrash /> Excluir empresa</Link></li>

            </ul>
        </aside>
    )
}