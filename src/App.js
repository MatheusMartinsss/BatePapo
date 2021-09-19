import React from "react";
import MensagemBar from "./Componentes/mensagembar";
import Mensagens from "./Componentes/mensagens";
import Login from "./Componentes/login";
import UsersList from "./Componentes/userslist";
import Header from "./Componentes/header";
import { GlobalContext } from './Context/GlobalContext'

function App() {
  const { UserAuth } = React.useContext(GlobalContext)
  return (
    <div style={{ display: "flex", flexDirection: 'column', height: '100vh', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
      {!UserAuth && <Login />}
      <Header />
      <div style={{ display: 'flex', width: '100%', justifyContent: "center", gap:'5px' }}>
        <Mensagens />
        <UsersList />
      </div>
    </div>
  );
}

export default App;
