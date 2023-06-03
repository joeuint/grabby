<script lang="ts">
  let time: string;
  const setClock = () => {
    time = new Date(Date.now()).toLocaleTimeString(undefined, {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  setClock();

  setInterval(setClock, 500);
</script>

<h2 class="text-3xl text-center font-semibold tracking-wider">{time || ''}</h2>
