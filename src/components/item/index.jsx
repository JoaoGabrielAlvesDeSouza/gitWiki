import { Container } from "./styles";

export default function Item ({repo, onClick}) {

    return (
        <Container>
            <a href= {repo?.html_url} target="_blank" rel="noreferrer" >
            <h3> {repo?.name} </h3>
            <p> {repo?.full_name} </p>
             </a>
            <button className="remove" onClick={() => onClick (repo.id)}> Remover da Listagem </button>
            <hr />
        </Container>
    );
}