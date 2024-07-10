# Custom TextField Component

A versatile and customizable TextField component for React applications, built with MUI.

## Features

- Customizable placeholder and label
- Password visibility toggle
- Error message display
- Password suggestions tooltip
- Bottom label with a link
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

Here's a basic example of how to use the custom TextField component in your React application:

```
import React from "react";
import TextFields from "your-component";

const App = () => {
  return (
    <div>
      <TextFields
        required
        label="Required"
        placeholder="Hello World"
        showError={true}
        errorMessage="This field is required"
        variant="outlined"
      />
    </div>
  );
};

export default App;
```

## Props

| Prop                  | Type     | Default | Description                                       |
| --------------------- | -------- | ------- | ------------------------------------------------- |
| `className`           | String   |         | CSS class for custom styling                      |
| `placeholder`         | String   |         | Placeholder text for the input                    |
| `onChange`            | Function |         | Function to handle change events                  |
| `type`                | String   | `text`  | Type of the input (text, password, etc.)          |
| `errorMessage`        | String   |         | Error message to display when `showError` is true |
| `label`               | String   |         | Label text for the input                          |
| `showError`           | Boolean  | `false` | Whether to show the error message                 |
| `showPasswordTooltip` | Boolean  | `false` | Whether to show password suggestions tooltip      |
| `showBottomLabel`     | Boolean  | `false` | Whether to show a bottom label with a link        |
| `bottomLabelPath`     | String   |         | URL path for the bottom label link                |
| `bottomLabelText`     | String   |         | Text for the bottom label link                    |
| `passwordSuggestions` | Array    |         | Array of password suggestion strings              |

## Customization

You can customize the TextField by passing additional props or overriding the default styles:

```
<TextFields
  placeholder="Enter your password"
  type="password"
  showPasswordTooltip={true}
  passwordSuggestions={[
    "At least 8 characters",
    "A mix of upper and lower case letters",
    "At least one number",
    "At least one special character",
  ]}
  showError={true}
  errorMessage="Password is required"
  bottomLabelPath="/forgot-password"
  bottomLabelText="Forgot Password?"
  style={{ backgroundColor: '#f0f0f0' }}
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

#### This `README.md` file provides comprehensive details about the component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!
