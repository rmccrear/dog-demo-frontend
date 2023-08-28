import React from "react";
import { ListGroup, Form, Button } from "react-bootstrap";


class Dogs extends React.Component {


  handleDelete = (id) => {
    this.props.deleteDog(id);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let dogObj = {
      name: event.target.name.value,
      breed: event.target.breed.value,
      age: event.target.age.value

    }
    console.log(dogObj);
    const newDog = await this.props.createDog(dogObj);
    console.log(newDog);
  }

  render () {
    console.log(this.props.dogs);
    const dogsComponents = this.props.dogs.map(dog => (
      <ListGroup.Item key={dog._id}>
        {dog.name} | {dog.breed} 
        <span onClick={() => this.handleDelete(dog._id)}>
          &nbsp; X
        </span>
      </ListGroup.Item>
    ))
    return (
      <>
        <h3>Dogs</h3>
        <ListGroup>
          { this.props.dogs.length > 0 && dogsComponents }
        </ListGroup>
        {/* Create Form here... */}
        <Form onSubmit={this.handleSubmit} style={{padding: "20%"}}>
          <h2>Create Dog</h2>
          <Form.Control type="text" name="name" placeholder="Name"/>
          <Form.Control type="text" name="breed" placeholder="Breed" />
          <Form.Control type="text" name="age" placeholder="Age" />
          <Button type="submit"> Submit </Button>
        </Form>
      </>
    );
  }
}

// Review:
// 1. What Props do we need to pass to Dogs to get Create and Delete to work?
// 2. What info does the Delete function need?
// 3. What info does the Update function need?

// TODO: UpdateDogForm Goes here
// 1. What are the props we should pass to Update?
// 2. What info about a dog do we need to Update it?
// 3. Where does that info come from?

export default Dogs;