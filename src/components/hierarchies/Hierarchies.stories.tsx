import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Hierarchies from "./Hierarchies";

export default {
  title: "ReactComponentLibrary/Hierarchies",
  component: Hierarchies,
} as Meta<typeof Hierarchies>;

const Template: StoryFn<typeof Hierarchies> = (args:any) => <Hierarchies {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Hello world",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};