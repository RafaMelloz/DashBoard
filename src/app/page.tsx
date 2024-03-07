import "./home.css"

import { GroupCards } from "@/components/GroupCards";
import { Table } from "@/components/Table";


export default async function Home() {
  const response = await fetch("http://localhost:3333/empresas")
  const data = await response.json()

  return (
    <div className="home">
      <div>
        <h2 className="title-section">My DashBoard</h2>
        <GroupCards data={data} />
        <h2 className="title-section">Empresas:</h2>
        <Table data={data} />
      </div>
    </div>
    
  );
}
