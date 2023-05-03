const Paciente = () => {
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Jesús</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 Diciembre de 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis
          sequi fugiat assumenda aliquam commodi quis veniam aliquid, tenetur
          sit in voluptas excepturi velit hic nulla nobis beatae unde animi.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
