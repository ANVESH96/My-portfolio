import {Card,Button} from "react-bootstrap"
import React from "react"

const skillsCard =()=>(
    <Card style={{ width: '18rem' }}>
    <div class="pagination-centered"
    style={{background:"#000000",width:'18rem',justifyContent:'center',textAlign:"center",verticalAlign:"middle",height:"18rem",color:"white",fontFamily:"lato"}}>
    {"Anvesh"}
    </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)

export default skillsCard