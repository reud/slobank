// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Font from './assets/DSEG7Modern-Bold.woff2'
import PageBoard from './pages/PageBoard'

function App(): JSX.Element {
  return (
    <>
      <PageBoard />
      <p>{Font}</p>
    </>
  )
}

export default App
