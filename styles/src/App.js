import classes from './App.module.css';

function App(props) {
  return (
<section className={`${classes.header} ${props.dark && classes.darkTheme}`}>
 <h1 className={classes.sky}>Hello, World!</h1>
      <p className={classes.featured}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero eum labore omnis aperiam eius fuga ratione suscipit! Officiis, non recusandae!

      </p>
</section>
  );
}

export default App;