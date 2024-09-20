// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Font from './assets/DSEG7Modern-Bold.woff2'
import AnyBoard from './pages/AnyBoard'

function App(): JSX.Element {
  return (
    <>
      <AnyBoard />
      <p>{Font}</p>
    </>
  )
}

export default App
