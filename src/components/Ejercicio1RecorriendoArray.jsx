const Ejercicio1RecorriendoArray = () => {
  const products = ["Celular", "Tablet", "Notebook"];
  return (
    <div>
      {products.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default Ejercicio1RecorriendoArray;
