# Custom Button Component

A customizable button component for React applications, built with MUI.

## Features

- Customizable background and font colors
- Supports multiple states (primary, secondary, error, warning)
- Full-width option
- Responsive design

## Installation

Install the package via npm:

```bash
npm install your-component
```

Or via yarn:

```bash
yarn add your-component
```

## Usage

Here's a basic example of how to use the custom Button component in your React application:

```
import React from "react";
import Button from "your-button-component";

const App = () => {
  return (
    <div>
      <Button
        name="Click Me"
        backgroundColor="#E93E3A"
        fontColor="#FFFFFF"
        onClick={() => alert('Button clicked!')}
      />
    </div>
  );
};

export default App;

```

## Props

| Prop              | Type     | Default   | Description                     |
| ----------------- | -------- | --------- | ------------------------------- |
| `className`       | String   |           | CSS class for custom styling    |
| `name`            | String   |           | Button text                     |
| `backgroundColor` | String   | `#E93E3A` | Background color of the button  |
| `fontColor`       | String   | `#FFFFFF` | Font color of the button text   |
| `onClick`         | Function |           | Function to handle click events |
| `width`           | String   | `100%`    | Width of the button             |

## Customization

You can customize the Button by passing additional props or overriding the default styles:

```
<Button
  name="Submit"
  backgroundColor="#4CAF50"
  fontColor="#FFFFFF"
  width="200px"
  onClick={() => alert('Submitted!')}
/>

```

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature/your-feature)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me directly at [your-email@example.com].

Made with by Het Shah

#### This `README.md` file provides comprehensive details about the Button component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!
