import React from "react";
import { useState, useRef } from "react";
// import {
//   Card,
//   Label,
//   TextInput,
//   Button,
//   InputGroupAddon,
// } from "flowbite-react";
// import { EmailJSResponseStatus } from "@emailjs/browser";

// console.log(EmailJSResponseStatus);
import emailjs from "@emailjs/browser";
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
import { useSelector, useDispatch } from "react-redux";
// import { result } from "lodash";

const Contact = () => {
  // Using Emailjs to send Form Data

  const bgTheme = useSelector((state) => state.theme.value);
  const form = useRef();

  const [Form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [FormData, SetFormData] = useState();
  const HandleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setForm((prev) => {
      return { ...prev, [name]: value };
    });

    // console.log(Form);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    SetFormData(Form);

    // const PushData = FormData;

    // console.log(process.env.NEXT_PUBLIC_API_KEY);

    // console.log(FormData);

    emailjs
      .sendForm(
        "service_5zqgb8o",
        "template_q5sy9hn",

        form.current,
        // "3zENa5Wu3rI6e5PT7"
        process.env.NEXT_PUBLIC_API_KEY
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    // console.log(FormData);
    // setForm("");
  };

  return (
    <div
      className="md:px-[17vh] md:my-0 mx-8 md:mx-0 md:pb-10 my-10"
      id="Contact"
      style={{
        color: bgTheme.text,
        backgroundColor: bgTheme.color,
      }}
    >
      <p className="text-3xl font ">Contact</p>
      <div className="max-w-xl mt-2 flex ">
        <Card className="bg-gradient-secondary shadow">
          <CardBody className="p-lg-5">
            <h4 className="mb-1">Want to work with me? or</h4>
            <p className="mt-0 font text-lg">Better still Say HI</p>
            <form ref={form}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  {/* <InputGroupAddon addonType="prepend"> */}
                  <InputGroupText>
                    <i className="ni ni-user-run" />
                  </InputGroupText>
                  {/* </InputGroupAddon> */}
                  <Input
                    placeholder="Your name"
                    type="text"
                    name="from_name"
                    value={Form.from_name}
                    onChange={HandleChange}
                  />
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
                    name="from_email"
                    type="email"
                    onChange={HandleChange}
                    value={Form.from_email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-4">
                <Input
                  className="form-control-alternative"
                  cols="80"
                  name="message"
                  placeholder="Type a message..."
                  rows="4"
                  type="textarea"
                  onChange={HandleChange}
                  value={Form.message}
                />
              </FormGroup>

              <div>
                <button
                  className="text-white bg-green-600 p-2 rounded-md  hover:bg-green-800 "
                  onClick={HandleSubmit}
                >
                  Send a message
                </button>
              </div>
            </form>
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
