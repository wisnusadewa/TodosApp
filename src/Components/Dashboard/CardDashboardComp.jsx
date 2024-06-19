const CardDasboardComp = ({ label, labelLength, style }) => {
  return (
    <div className="text-black ">
      <div className={`card w-72 h-40 md:w-[400px] md:mx-auto ${style} shadow-xl rounded-md`}>
        <div className="card-body justify-center items-center">
          <p className="card-title">{label}</p>
        </div>
        <div className="flex justify-center items-center">
          <p></p>Total : {labelLength}
        </div>
      </div>
    </div>
  );
};

export default CardDasboardComp;
