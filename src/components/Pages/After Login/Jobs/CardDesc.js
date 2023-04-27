import Card from "react-bootstrap/Card";

function CardDesc() {
  return (
    <Card
      className="text-left"
      style={{
        position: "fixed",
        top: "15%",
        width: "40vw",
        margin: "auto",
        zIndex: "5000",
        left: "30%"
      }}
    >
      <Card.Header>Choose Description</Card.Header>
      <Card.Body>
        <input
          type="text"
          placeholder="Enter New Description"
          style={{
            width: "100%",

            backgroundColor: "transparent",
            border: "1px solid rgb(203, 203, 203)"
          }}
        />

        <div style={{ marginLeft: "20rem" }}>
          <button style={{ margin: "10px" }}>Cancle</button>
          <button style={{ margin: "10px" }}>OK</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardDesc;
