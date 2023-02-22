import React from "react";
// import {
//   Card,
//   Label,
//   TextInput,
//   Button,
//   InputGroupAddon,
// } from "flowbite-react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  //   Container,
  //   Row,
  //   Col,
} from "reactstrap";

const Contact = () => {
  return (
    <div className="md:px-32 md:my-10">
      <p className="text-3xl font ">Contact</p>
      <div className="max-w-xl mt-2 flex " id="contact">
        <Card className="bg-gradient-secondary shadow">
          <CardBody className="p-lg-5">
            <h4 className="mb-1">Want to work with me?</h4>
            <p className="mt-0">Your project is very important to me.</p>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                {/* <InputGroupAddon addonType="prepend"> */}
                <InputGroupText>
                  <i className="ni ni-user-run" />
                </InputGroupText>
                {/* </InputGroupAddon> */}
                <Input placeholder="Your name" type="text" name="user_name" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                {/* <InputGroupAddon addonType="prepend"> */}
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
                {/* </InputGroupAddon> */}
                <Input
                  placeholder="Email address"
                  name="user_email"
                  type="email"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-4">
              <Input
                className="form-control-alternative"
                cols="80"
                name="user_message"
                placeholder="Type a message..."
                rows="4"
                type="textarea"
              />
            </FormGroup>
            <div>
              <Button
                block
                className="btn-round"
                color="default"
                size="lg"
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <Card style={{ width: "50vh" }}>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <label htmlFor="email1" value="Your email" />
              </div>
              <input
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="password1" value="Your password" />
              </div>
              <input id="password1" type="password" required={true} />
            </div>
            {/* <div className="flex items-center gap-2">
              <No Display Name id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div> */
}
{
  /* <Button type="submit">Submit</Button> */
}
{
  /* </form> */
}
{
  /* </Card> */
}
