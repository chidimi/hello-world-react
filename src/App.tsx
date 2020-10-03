// eslint-disable-next-line no-use-before-define
import React, { FC, Component, ReactElement } from 'react';
import './App.css';
import { Card, Statistic, Button } from 'semantic-ui-react';
import CharacterList, { Character } from './CharacterList';

type State = {
  count: number;
};

export class Counter extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  reset(): void {
    this.setState({ count: 0 });
  }

  increment(): void {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render(): ReactElement {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={() => this.reset()}>
                reset
              </Button>
              <Button color="green" onClick={() => this.increment()}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川　楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木',
      grade: 3,
      height: 197,
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>slam dunkの登場人物</h1>
      </header>
      <CharacterList school="湘北高校" characters={characters} />
    </div>
  );
};

export default App;
