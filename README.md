### Add service to dashboard

webpack.config.js
```

const services = [
  {
    url: 'http://localhost:5001/',
    endpoint: 'mf1main', // only for production
    name: 'mf1Main',
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


### Create Angular widget

exec
```
npx ng add @angular-architects/module-federation@next
npx ng add ngx-build-plus
```


webpack.config.js
```
name: "mf1Main",
filename: "remoteEntry.js",
exposes: {
    './MF1Main': './/src/bootstrap.ts',
},    
```