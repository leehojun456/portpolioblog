<script>
    let name = '';
    let email = '';
    let password = '';
  
    const saveUser = async () => {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if (response.ok) {
        window.location.href = '/'; // 설정 완료 후 첫 페이지로 이동
      } else {
        alert('사용자 설정 중 오류가 발생했습니다.');
      }
    };
  </script>
  


  <form class="rounded-lg p-4 flex flex-col items-center justify-center w-dvw h-dvh align-middle" on:submit|preventDefault={saveUser}>
    <div class="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg w-96">
        <div class="flex justify-between items-center text-2xl text-center">
            <h1 class="font-bold text-indigo-600 select-none">SET UP</h1>
            <a href="/" class="flex flex-col justify-center"><ion-icon name="arrow-back-outline">BACK</ion-icon></a>
        </div>
        <label name="email">
            <input type="email" class="w-full p-2 border border-gray-300 rounded-lg mt-2" placeholder="EMAIL" bind:value={email}/>
            </label>
        <label name="password">
            <input type="password" class="w-full p-2 border border-gray-300 rounded-lg mt-2" placeholder="PASSWORD" bind:value={password}/>
        </label>
        <label name="name">
            <input type="text" class="w-full p-2 border border-gray-300 rounded-lg mt-2" placeholder="NAME" bind:value={name}/>
        </label>
        <div>
            <button class="w-full p-2 bg-indigo-600 text-white rounded-lg mt-2" type="submit">CORMFIRM</button>
        </div>
    </div>
</form>
  