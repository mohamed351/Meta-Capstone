export default function ReservationComplete() {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            color: "rgba(73, 94, 87, 1)",
            height: "25vh",
            display: "flex",
          }}
        >
        
          <div>
            <h1 style={{textAlign:"center"}} >Thank you for Your reservation</h1>
            <p>your table number is {Math.floor(Math.random() * 101)}</p>
          </div>
        </div>
      
      </>
    );
  }
  