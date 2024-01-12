import { Container } from "./styles";
import Input from "../components/input";
import Item from "../components/item";
import { useState } from "react";
import { find } from "../services/gitRepo";
import Button from "../components/button";

export default function App () {

  const [repo, setRepo] = useState ([]);
  const [currentUser, setCurrentUser] = useState ("");
  const [currentRepo, setCurrentRepo] = useState ("");
  const [blocked, setBlocked] = useState (false);

  async function HandleSearchRepo (event) {

    event.preventDefault (event);

    setBlocked (true);
    
    try {
      if (currentRepo != "") {
        const data = await find (`${currentUser}/${currentRepo}`);
        setCurrentRepo ("");
        const exists = repo.find ((repo) => repo.id == data.id);
        if (!exists) {
          setRepo ((repo) => [...repo, data]);
        }
      }
    } catch {
      alert ("Repositório não existe");
    }

    setBlocked (false);
  }

  function HandleRemove (id) {
    setRepo (repo.filter ((repo) => {
      if (repo.id != id) {
        return repo;
      }
    }));
    console.log (repo);
  }

  return (
    <Container>
      <form onSubmit = {HandleSearchRepo} className = "card">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z" clipRule="evenodd" />
      </svg>
        <Input placeholder = {"@user"} value = {currentUser} onChange = {(event) => setCurrentUser (event.target.value)} />
        <Input placeholder = {"Projeto do Git Hub"} value = {currentRepo} onChange = {(event) => setCurrentRepo (event.target.value)} />
        <Button blocked = {blocked} onClick = {HandleSearchRepo}/>
      </form>
      <div className = "list">
      {
        repo.map ((repo, key) => (
          <Item key = {key} repo = {repo} onClick = {HandleRemove}/>
        ))
      }
      </div>
    </Container>
  );
}