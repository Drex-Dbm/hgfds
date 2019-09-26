<script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async>
  const crate = new Crate({
    server: '299881420891881473',
    channel: '355719584830980096'
  })

  crate.notify('Test notification')
  crate.on('signIn', data => {
    console.log(`Guest signed in as ${data.name}`)
    crate.emit('sendMessage', 'hello ${data.name}')
  })
</script>
