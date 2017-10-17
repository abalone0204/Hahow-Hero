const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {
		const server = express()
		server.use('/static', express.static('static'))
		server.get('/', (req, res) => {
			res.redirect('/heroes')
		})

		server.get('/heroes/:id', (req, res) => {
			const actualPage = '/hero'
			const queryParams = { id: req.params.id }
			app.render(req, res, actualPage, queryParams)
		})

		server.get('*', (req, res) => {
			req.url = req.url.replace(/\/$/, '')
			return handle(req, res)
		})
		const port = process.env.PORT || 3000
		server.listen(port, (err) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})