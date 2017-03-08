# semantic-ui-react-todos

<p align="center"><img src="https://i.imgur.com/3H4CDEK.png" /></p>

This project is the [react-redux Todo List example](https://github.com/reactjs/redux/tree/master/examples/todos) modified to use [semantic-ui](http://semantic-ui.com) components via the [semantic-ui-react](http://react.semantic-ui.com) integration. It is meant as a variation on a well-known example project to familiarize ReactJS developers with the installation and use of Semantic UI.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Running

```bash
$ npm install
$ npm start
```

The server should be live at <http://localhost:3000>.

## How to get from react-redux todos example to this project

### Install `semantic-ui` and `semantic-ui-react`

```bash
$ npm install --save semantic-ui-react 
$ npm install --save-dev semantic-ui
```
Follow the prompts for the `semantic-ui` package, choosing the most customizable option, which saves to the project directory. There's also the option to leave the `semantic/` directory in `node_modules/`, which would result in no additional project directory files at the expense of not being able to specify a different Semantic UI theme. With these files in the project directory, theme customization can be done in `semantic/src/theme.config` and `semantic/src/themes/`. See [the Semantic UI usage docs](http://react.semantic-ui.com/usage) for more information.

### Build and link the Semantic UI `dist/` files

Semantic UI uses the tool `gulp` to build. If you do not have it, you may want to [install it globally](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). The following build steps must be done after every change to themes or other modifications to `semantic` itself.
```bash
$ (cd semantic && gulp build)
```

We must now link the newly generated CSS file as a dependency into `src/index.js` so that [Webpack](https://webpack.github.io/) knows to bundle it:

In `src/index.js`, add:
```js
import '../semantic/dist/semantic.min.css';
```

### Replace desired components

The best way to understand this is to peek at the source files.

- `src/components/Todo.js`: The individual `Todo` items have been changed to [`Checkbox`](http://react.semantic-ui.com/modules/checkbox).
- `src/components/Footer.js`, `src/components/Link.js`: The filter links have been changed to [`Button`](http://react.semantic-ui.com/elements/button) and its subclasses.
- `src/containers/AddTodo.js`: The input box has been changed to [`Input`](http://react.semantic-ui.com/elements/input), and the submit button has been changed to [`Button`](http://react.semantic-ui.com/elements/button).

### Notes

- The swap-out process was very painless. ReactJS itself has great separation of concerns, and this framework respects that a lot. Aside from installing the libraries, there wasn't anything that had to be done outside of the component-specific file.
- Caveat: Now we have more configuration files/folders to manage, but as discussed above, this isn't necessary and is simply a decision in the trade-off between customizability and configuration simplicity.
- Caveat: Because `<input />` components are nested in the Semantic UI provided `<div></div>`s, [`ref=` properties](https://facebook.github.io/react/docs/refs-and-the-dom.html) on Semantic UI input elements will not work as intended. See discussions and workarounds in this thread: <https://github.com/Semantic-Org/Semantic-UI-React/issues/405>.

Overall, I'm very happy with this framework, and I think it will play nicely with other ReactJS components without any hitches. It will definitely save me development time.
