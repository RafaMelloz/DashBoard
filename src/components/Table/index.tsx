import "./styles.css"


interface Empresa {
    id: string | number;
    name: string;
    status: string;
    gasto: string | number;
    lucro: string | number;
}

interface Props {
    data: Empresa[];
}

export const Table = ({data}:Props) => {
    return(
        <div className="backTable w30-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Empresas</th>
                        <th>Status</th>
                        <th>Lucro</th>
                        <th>Gastos</th>

                    </tr>
                </thead>

                <tbody>
                    {data.map((empresa) => (
                        <>
                            <tr className="table__tbody__row" key={empresa.id}>
                                <th>{empresa.name}</th>
                                <th>{empresa.status}</th>
                                <th>R$ {empresa.gasto}</th>
                                <th>R$ {empresa.lucro}</th>
                            </tr>
                            <tr><th className="gap-th"></th></tr>
                        </>
                    ))}

                   
                   

                </tbody>
            </table>
        </div>
    )
}