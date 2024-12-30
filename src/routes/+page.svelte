<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col justify-center h-dvh items-center w-full">
    <div class="flex flex-col w-2/3 gap-96 ">
        <div class=" font-bold text-9xl text-indigo-600 flex flex-col select-none">
            <p class="tracking-tighter">
                내가 필요해서 <br>만든 서비스
            </p>
            <p class="text-lg text-indigo-300 select-none mt-10">
                포트폴리오와 블로그를 결합할 수 있는 서비스가 있으면 좋겠다.<br>비 프로그래머도 사용할 수 있는 직관적인 포트폴리오 사이트를 제작할 수 있으면 좋겠다.<br>
                디자인은 최대한 심플하고 깔끔하게.<br><br><br>단순 취업용이아닌 진짜 <span class="text-4xl text-indigo-600">" 나 "</span> 에 대한 모든것을 한번에 소개할 수 있는 있었으면 좋겠다.
            </p>
        </div>
        <div class="w-full flex justify-end">
            <a href="123" class=" rounded-full p-2 px-10 bg-indigo-600 text-white font-bold hover:text-indigo-600 hover:bg-white hover:border-indigo-600 hover:border">시작하기</a>
        </div>
    </div>
</div>