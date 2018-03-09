console.log("app.js is running!");

const appName = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSumbit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option) {
    appName.options.push(option);
    e.target.elements.option.value = '';
    renderUpdate();
  }
};

const onRemoveAll = () => {
  appName.options = [];
  renderUpdate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appName.options.length); 
  const option = appName.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderUpdate = () => {
  const template = (
    <div>
      <h1>{appName.title}</h1> 
      {appName.subtitle && <p>{appName.subtitle}</p>}
      {appName.options.length > 0 ? 'Here are your options' : 'No options' }
      <button disabled={appName.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          appName.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSumbit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderUpdate();


