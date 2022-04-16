import { Container } from "./styles";
import React, { useContext } from "react";
import { StoreContext } from "../global/global";
import chargif from "../../assets/chargif.webp"

export function Login() {

  const { login, setLogin, gender, setGender } = useContext(StoreContext)

  function handleLoginChange (event: React.ChangeEvent<HTMLInputElement>){
    setLogin(event.target.value);
  };

  function handleGenderChange (event: React.ChangeEvent<HTMLSelectElement>){
    setGender(event.target.value);
  };

  return (
    <Container>
      <div>
        <div>
          <p>What is your name?</p>
          <input
          type="text"
          placeholder="your name here"
          value={login}
          onChange={handleLoginChange}></input>
        </div>
        <div>
          <p>What are you?</p>
          <select
          value={gender}
          onChange={handleGenderChange}>
            <option value="">Choose your gender...</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
            <option value="NonBinary">NonBinary</option>
          </select>
        </div>
        <div>
          <img src={chargif}></img>
          <button >Submit</button>
        </div>
        
      </div>
    </Container>
  );
}
