

because we use express.json() we don't really need to parse the data

```js

app.post('/api/users', (req, res) => {

    const { username, password, email } = req.body;

    console.log('Received data:', { username, password, email });


    console.log('actual data :', req.body);

    res.json({ message: 'Data extracted successfully', data: { username, password, email } });
});
```

or 
```js

const user = {
    username : req.body.username ,
    field : req.body.field_we_want_to_extract
}
```