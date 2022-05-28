import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({
  models: {
    fazer: Model,
    fazendo: Model,
    finalizado: Model
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



    this.get('kanban/fazendos', () => {
      return this.schema.all('fazendo');
    })

    this.post('kanban/fazendos', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('fazendo', data)
    })



    this.get('kanban/finalizados', () => {
      return this.schema.all('finalizado');
    })

    this.post('kanban/finalizados', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('finalizado', data);
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
