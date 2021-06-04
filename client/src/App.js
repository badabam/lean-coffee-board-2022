import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(cards => setCards(cards))
  }, [])

  return (
    <div>
      I am always here.
      <Switch>
        <Route exact path="/">
          <h1>Hello word!</h1>
        </Route>
        <Route path="/cards">
          <h1>We want to show cards here</h1>
          {cards.map(card => (
            <div key={card._id}>{card.text}</div>
          ))}
        </Route>
        <Route>404 not found</Route>
      </Switch>
    </div>
  )
}
