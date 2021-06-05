webpack.config.js
```

const services = [
  {
    url: 'http://localhost:3006/',
    component: 'messages',
    name: 'messages',
  },
];

```

Dashboard.tsx with React
```

const Messages = React.lazy(() => import('messages/Messages'));

...

<React.Suspense fallback={<div>....loading Header</div>}>
  <Messages />
</React.Suspense>

```


Dashboard.tsx with Angular
```

useEffect(() => { import('psbPayments/PSBPayments') }, []);

...

<app-root></app-root>

```


global.d.tsx

```
declare module 'messages/Messages';
```