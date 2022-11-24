import "../burger/burger.style.css";

function Burger({type,price,img,classHandler,name, ingredients}) {
  return (

    <>  
   
    <div className={classHandler}>
    <img src={img} alt="Burger Picture" />
    <h2>{name} {type}</h2>
    <h3>${price}</h3>
    <p>{ingredients}</p>
    </div>
    </>
  );
}

export default Burger;
