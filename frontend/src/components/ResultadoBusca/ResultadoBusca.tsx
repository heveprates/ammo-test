import { Alert } from 'antd';
import { useQueryStringStore } from '../../stores/QueryStringStore';

function ResultadoBusca() {
  const resultado = useQueryStringStore((state) => state.termo);
  return (
    <>
      {resultado && (
        <Alert message="Resultado: " description={resultado} type="info" />
      )}
    </>
  );
}

export default ResultadoBusca;
