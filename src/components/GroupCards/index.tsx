import { Card } from "../Card"
import { CardProgress } from "../CardProgress";
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

export const GroupCards = ({data}: Props) =>{

    const QuantidadeEmpresas: number = data.length;
    const neg: number = data.filter(empresa => empresa.status === "Positiva").length;
    const posit: number = data.filter(empresa => empresa.status === "Negativo").length;

    const empresasPositivas: string = ((posit / QuantidadeEmpresas)*100).toFixed(0).toLocaleString();
    const empresasNegativas: string = ((neg / QuantidadeEmpresas) * 100).toFixed(0).toLocaleString();


    return(
        <div className="GroupCards">
            <Card text={"Empresas cadastradas"} number={QuantidadeEmpresas.toLocaleString()}/>
            <CardProgress text={"Empresas positivas"} number={empresasPositivas} status={true}/>
            <CardProgress text={"Empresas negativas"} number={empresasNegativas} status={false}/>
        </div>
    )
}
