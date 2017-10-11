Checkbox has it is own state.

Checkbox component example:

```jsx
<Checkbox />
```

It is possible to disable the checkbox using disable prop:
You can add a custom props to an example wrapper:

```jsx 
<Checkbox disabled={true} />
```

It is possible to set label the checkbox using label prop:
You can add a custom props to an example wrapper:

```jsx 
<Checkbox label='Job done!' />
```

You can also initialise the checkbox value as checked:
``` jsx
<Checkbox label='Job done!' isChecked={true} />
```

Finally you can send an extra onChange function to Checkbox so it should do someting else apart from toggling the checked value:  :smile:

```jsx 
<Checkbox label='Job done!' isChecked={true} onChange={()=>{console.log('Do something else!')}} />
```