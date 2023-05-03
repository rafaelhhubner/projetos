import styles from "./ProjectCard.module.css"

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p>
                <span></span> {category}
            </p>
            <div>
                <p>Editaer</p>
                <p>Remover</p>
            </div>
        </div>
    )
}

export default ProjectCard
