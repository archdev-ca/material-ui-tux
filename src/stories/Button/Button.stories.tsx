import { Button, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "radio",
      options: ["text", "outlined", "contained"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="link">Link</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="link">
          Small
        </Button>
        <Button size="medium" variant="link">
          Medium
        </Button>
        <Button size="large" variant="link">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="text">
          Small
        </Button>
        <Button size="medium" variant="text">
          Medium
        </Button>
        <Button size="large" variant="text">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="outlined">
          Small
        </Button>
        <Button size="medium" variant="outlined">
          Medium
        </Button>
        <Button size="large" variant="outlined">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="contained">
          Small
        </Button>
        <Button size="medium" variant="contained">
          Medium
        </Button>
        <Button size="large" variant="contained">
          Large
        </Button>
      </Stack>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
    variant: "contained",
  },
};

export const WithIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button variant="outlined" endIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
    variant: "contained",
  },
};

export const CustomClick: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
    variant: "contained",
  },
};

export const LoadingState: Story = {
  render: () => (
    <Button variant="contained" disabled loading loadingPosition="start">
      Loading...
    </Button>
  ),
};
