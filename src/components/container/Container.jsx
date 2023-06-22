import { useEffect, useState } from "react";
import { APIrequest, oneResponse } from "../../service/service";
import TodoRegister from "../pure/TodoRegister";
import TodoInfo from "../pure/TodoInfo";

const Container = () => {
  const [response, setResponse] = useState(null);
  const [response2, setResponse2] = useState([]);

  useEffect(() => {
    APIrequest().then((res) => setResponse(res));
  }, []);

  function oneInfo(id) {
    oneResponse(id).then((res) => setResponse2(res));
  }

  console.log(response2);

  return (
    <div>
      <div className="box-header" style={styles.header}>
        <h1 className="title">Registro Glucosa</h1>
      </div>
      <div style={styles.registro}>
        <TodoRegister response={response} oneinfo={oneInfo} />
      </div>
      <div>
        {
          // eslint-disable-next-line react/prop-types
          response2 &&
            response2.map((item, index) => (
              <div key={index}>
                <TodoInfo item={item} setResponse2={setResponse2} />
              </div>
            ))
        }
      </div>
    </div>
  );
};

const styles = {
  header: {
    padding: 15,
    margin: 10,
    color: '#242424',
    background: '#f0f0f0',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registro: {
    color: '#242424',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 10,
    padding: 10,
  }
}

export default Container;
