import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({
  models: {
    fazer: Model,
  },

  seeds(server) {
    server.db.loadData({
      fazeres: [
        
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('kanban/fazers', () => {
      return this.schema.all('fazer');
    })

    this.post('kanban/fazers', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('fazer', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
