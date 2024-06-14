import { useRef } from "react";
import ReactToPrint from "react-to-print";

const Tabela = ({ data }: any) => {
  return (
    <table>
      <thead className="bg-gray-400">
        <tr>
          <th>Data</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((item: any, index: number) => (
          <tr key={index}>
            <td>{item.data}</td>
            <td>{item.descricao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  const componentRef = useRef(null);
  const tableData = [
    { data: "2024-06-13", descricao: "Exemplo 1" },
    { data: "2024-06-14", descricao: "Exemplo 2" },
    { data: "2024-06-15", descricao: "Exemplo 3" },
    { data: "2024-06-16", descricao: "Exemplo 4" },
    { data: "2024-06-17", descricao: "Exemplo 5" },
    { data: "2024-06-18", descricao: "Exemplo 6" }
  ];

  return (
    <>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div className="h-full bg-red-500">
        <p className="text-white">Testando</p>
      </div>
      <div ref={componentRef}>
        <Tabela data={tableData} ref={componentRef}/>
      </div>
      <div className="h-full bg-blue-500">
        <p className="text-white">Testando</p>
      </div>
    </>
  );
}
