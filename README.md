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

Dashboard.tsx
```

const Messages = React.lazy(() => import('messages/Messages'));

...

<React.Suspense fallback={<div>....loading Header</div>}>
  <Messages />
</React.Suspense>

```


global.d.tsx

```
declare module 'messages/Messages';
```