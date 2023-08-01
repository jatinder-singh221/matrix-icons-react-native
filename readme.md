# Matrix Icons React Native

![Matrix Icons React Logo](https://raw.githubusercontent.com/jatinder-singh221/matrix-icons-react/main/Matrix.svg)

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/jatinder-singh221/matrix-icons-react/blob/main/LICENSE)

![npm](https://img.shields.io/npm/v/matrix-icons-react?color=green)

Matrix Icons React Native is a React Native library that provides a collection of high-quality icons for use in React applications. These icons are designed to be visually appealing, scalable, and easily integrable into your projects.

## Installation

You can install Matrix Icons React using npm or yarn. To install it with npm, use the following command:

```bash
npm install matrix-icons-react-native
```

If you prefer using yarn, run the following command:

```bash
yarn add matrix-icons-react-native
```

## Usage

To use Matrix Icons React in your React application, you need to import the desired icon and render it as a component. Here's a simple example:

```jsx
import { View } from 'react-native'
import { IconName } from 'matrix-icons-react-native';

const App = () => {
  return (
    <View>
      <IconName />
    </View>
  );
};

export default App;
```

Replace `IconName` with the actual name of the icon you want to use.

## Available Icons

To see the list of available icons and their names, you can check the [Matrix Icons React repository](https://). There, you'll find a visual reference guide to help you choose the right icon for your needs.


## Customise

default color is the currentColor and default height and width is 24px

```jsx
import { View } from 'react-native';
import { HomeSolid } from 'matrix-icons-react';

const App = () => {
  return (
    <View>
      <HomeSolid color='any-color' width='interger' height='interger' />
    </View>
  );
};

export default App;

```

## License

Matrix Icons React is distributed under the [MIT License](https://github.com/jatinder-singh221/matrix-icons-react-native/blob/main/LICENSE). You are free to use, modify, and distribute this library for both personal and commercial projects. However, it is appreciated if you provide attribution to the original author.

## Contributing

If you find any issues, have suggestions, or want to contribute to Matrix Icons React, please feel free to create a pull request or raise an issue in the [GitHub repository](https://github.com/jatinder-singh221/matrix-icons-react-native). Your contributions are highly welcome!

## Author

Matrix Icons React is maintained and developed by [Jatinder Singh](https://github.com/jatinder-singh221). Feel free to reach out for any questions or inquiries related to this project.

Thank you for using Matrix Icons React! We hope it enhances your React projects with beautiful and scalable icons.