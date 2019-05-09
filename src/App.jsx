import React from 'react';
import ContentEditable from 'react-contenteditable';

import * as tools from './components/tools';

class App extends React.Component {
  state = {
    value: '',
  };

  setValue = (event) => {
    const { value } = event.target;

    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="app">
        <header>
          <h1>Clearfix</h1>
        </header>
        <main>
          <ContentEditable
            onChange={this.setValue}
            style={{
              width: '100%',
              padding: '1em',
              border: 'none',
              borderRadius: '4px',
              background: 'rgba(0,0,0,.05)',
            }}
            html={value}
          />
          {
            !value && (
              <div className="app-examples">
                <h3>Examples</h3>
                <ul className="example">
                  {
                     [
                       '1024 : x = 3 : 2',
                       '#7B1E7A',
                       'lorem',
                       '124 + 24',
                       '20% of 9.99',
                     ].map(example => (
                       <li key={example}>
                         <button
                           type="button"
                           className="clear"
                           onClick={() => {
                             this.setState({ value: example });
                           }}
                         >
                           {example}
                         </button>
                       </li>
                     ))
                  }
                </ul>
              </div>
            )
          }
          {
            Object.keys(tools).map((key) => {
              const Tool = tools[key];

              return <Tool key={key} value={value} />;
            })
          }
        </main>
      </div>
    );
  }
}

export default App;
