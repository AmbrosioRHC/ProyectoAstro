const Card = ({stockImage}) => {
  
  return (
    <>
      <div className="card mb-3" style={{"maxWidth": "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={stockImage.img1} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{stockImage.name}</h5>
              <p className="card-text">{stockImage.description}</p>
              <p className="card-text"><small className="text-muted">{stockImage.price}</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
