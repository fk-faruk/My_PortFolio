import React from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";

const Contact = () => {
  return (
    <>
      <div className="max-w-sm mt-14 ml-auto mr-auto flex ">
        <Card style={{ width: "50vh" }}>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required={true} />
            </div>
            {/* <div className="flex items-center gap-2">
              <No Display Name id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div> */}
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Contact;
